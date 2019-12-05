import * as p5 from "p5"
import { random } from "../utilities"
import { Gene } from "./gene"
import { WorldObject } from "./object"
import { Force, Vector } from "./physics"

export class Life extends WorldObject {
  public static collisionPriority = 100

  public constructor(public position: Vector) {
    super(position)
    this.mass = 3
  }
  public next(): Force {
    return Force.zero()
  }

  public draw(p: p5): void {
    p.noFill()
    p.stroke(86, 51, 245)

    const diameter = this.mass
    p.circle(this.position.x, this.position.y, diameter)
  }
}

export class PassiveLife extends Life {
  public next(): Force {
    return Force.zero()
  }

  public draw(p: p5): void {
    p.noFill()
    p.stroke(86, 51, 245)

    this.drawCircles(p, 6, this.position.x, this.position.y, 20)
  }

  private drawCircles(p: p5, numberOfCircles: number, x: number, y: number, diameter: number): void {
    if (numberOfCircles <= 0) {
      return
    }
    p.circle(x, y, diameter)
    this.drawCircles(p, numberOfCircles - 1, x - this.velocity.x * 2.5, y - this.velocity.y * 2.5, diameter * 0.6)
  }
}

export class GeneticLife extends Life {
  private readonly energy = 0
  public get isAlive(): boolean {
    return this.energy > 0
    }

  public constructor(public position: Vector, public readonly gene: Gene) {
    super(position)
    this.mass = 3
  }

  public next(): Force {
    const max = 0.1
    const vx = random(max, -max)
    const vy = random(max, -max)

    return new Force(new Vector(vx, vy))
  }

  public draw(p: p5): void {
    p.noStroke()
    p.fill(this.gene.color.r, this.gene.color.g, this.gene.color.b)

    const diameter = this.mass
    p.circle(this.position.x, this.position.y, diameter)
  }
}

export class DeadBody extends WorldObject {
  public static collisionPriority = 101

  public get velocity(): Vector {
    return new Vector(0, 0)
  }

  public draw(p: p5): void {
    super.draw(p)  // TODO: implement
  }
}
