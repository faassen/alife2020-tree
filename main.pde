class Life{
  PVector position;
  int radius;

  Life(float x, float y){
    position = new PVector(x, y);
    radius=80;
  }
  void draw(){
    noFill();
    ellipse(position.x, position.y, radius, radius);
  }
  void update(){
//    position.x += random(-10, 10);
//    position.y += random(-10, 10);
  }
}

//壁に衝突も
bool isCollision(Life l1, Life l2){
  float distance = (PVector.sub(l1.position.sub, l2.position)).mag();
  return (abs(distance) <= l1.radius + l2.radius);
}

Life[] lifes;

void setup()
{
  size(600,400);
  background(125);
  fill(255);
  //noLoop();
  PFont fontA = loadFont("courier");
  textFont(fontA, 14);
  println("Hello, ErrorLog!");
  lifes = [new Life(40,50), new Life(120, 120)];
}


void draw(){
  fill(255);
  noStroke();
  rect(0, 0, 600, 400);
  for (int i = 0; i < lifes.length; i++){
    lifes[i].update();
    stroke(0, 0, 0);
    for (int j = 0; j < lifes.length; j++){
      if(i==j) continue;
      println(i);
      println(j);
      if(isCollision(lifes[i], lifes[j])){
        stroke(255, 0, 0);
        break;
      }
    }
    lifes[i].draw();
  }
}

void mouseClicked(){
  lifes[lifes.length] = new Life(mouseX, mouseY);
}
