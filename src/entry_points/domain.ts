/*

L-System layer

E - Energy
W - Water

A -> AB   [consumes 1 W 2 E]

A: implies update rule for CA
B: implies another update rule for the CA

CA layer

16 W 20 E
proportional update rule to propagate to parent and/or children

update rule used could be determined by the L-system node we're in.

state: energy and amount

Environmental Layer

root is the source of Water
end nodes evaporate Water
end nodes (any node?) generate E. Perhaps we could only make certain end nodes of type L generate E.
perhaps other nodes (for the stem? can still generate a little bit to have different strategies, or we could have leaves, needles, etc)

more sophisticated: only end nodes that can receive sunlight generate E,
sunlight vector, etc.

A node needs to consume a certain amount of E and W to be able to grow child nodes. To grow L could be more expensive than to grow non-L nodes.

A node needs to consume a certain amount of E and W to maintain itself.

Evolution layer

Generate a bunch of random rules (including CA consumption rules and transport rules)
R is the root node which is special, and can never be generated by evolution
L is the leaf node and is the only node that can generate E

The transport rules can be freely mutated and are proportions. Perhaps with upper limit?

Mutation step:
point mutation of rules
introduce new rule
remove rule
crossover between two sets of rules

Selection:

The plants which have managed to grow the most nodes are the most successful.

  A
 A    B
A  A  B   A

ABAABABABAABA

A -> BC

*/

export type RuleName = string

export interface ResourceCost {
  water: number
  energy: number
}

export class Environment {
  public costs(ruleNames: RuleName[]): ResourceCost {
    const waterCost = ruleNames.length * 10
    const energyCost = ruleNames.length * 10

    return { "water": waterCost, "energy": energyCost }
  }
}

export class Tree {
  public constructor(
    public rootNode: TreeNode,
    public lSystemRuleMap: LSystemRuleMap,
    public transportRuleMap: TransportRuleMap,
    public environment: Environment,
  ) { }

  public update(): void {
    this.rootNode.update(this)
  }
}

export class TreeNode {
  public children: TreeNode[] = []
  public water = 0
  public energy = 0

  public constructor(public name: RuleName, public parent: TreeNode | undefined) { }

  public update(tree: Tree) {
    // if we already have children, we update them recursively
    if (this.children.length !== 0) {
      this.children.forEach(child => {
        child.update(tree)
      })

      return
    }
    // without children, try to grow new ones
    const lSystemRule = tree.lSystemRuleMap.get(this.name)
    if (lSystemRule == undefined) {
      return
    }
    const childNames = lSystemRule.product
    const cost = tree.environment.costs(childNames)
    const canSpend = this.spendResources(cost)
    if (!canSpend) {
      return
    }
    this.children = childNames.map(name => new TreeNode(name, this))
  }

  public toString(): string {
    const childrenStates = this.children.reduce(
      (result, child) => {
        return `${result}${String(child)}`
      },
      "",
    )

    return `${this.name}${childrenStates}`
  }

  private spendResources(cost: ResourceCost): boolean {
    if (this.water < cost.water || this.energy < cost.energy) {
      return false
    }
    this.water -= cost.water
    this.energy -= cost.energy

    return true
  }
}

export class LSystemRule {
  public constructor(public name: RuleName, public product: RuleName[]) { }
}

export type ResourceType = "Water" | "Energy"

export type ResourceMap = Map<ResourceType, number>

export class TransportRule {
  public constructor(
    public name: RuleName,
    public parentResourceMap: ResourceMap,
    public childResourceMap: ResourceMap,
  ) { }
}

export type LSystemRuleMap = Map<RuleName, LSystemRule>
export type TransportRuleMap = Map<RuleName, TransportRule>
