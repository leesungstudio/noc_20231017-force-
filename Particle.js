class Particle {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        this.c = color(0);
        this.w = 50;
    }

    addForce(aForce) {
        this.acc.add(aForce);
    }

    update() {
        this.checkEdge();
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        this.acc.set(0,0);

    }


    checkEdge() {
        if (this.pos.y > height) {
            this.vel.y = this.vel.y * -1;
            this.pos.y = height;
        }
        if (this.pos.y < 0) {
            this.vel.y = this.vel.y * -1;
            this.pos.y = 0;
        }

        if (this.pos.x > width) {
            this.pos.x = 0;
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
        }
    }


    show() {
        fill(this.c);
        circle(this.pos.x, this.pos.y, this.w);
    }
    clike(x,y) {
        this.mousePV = createVector(x, y);
        this.ting = p5.Vector.sub(this.pos, this.mousePV);
        if (this.ting.mag() < this.w / 2) {
            this.addForce(this.ting);
        }
    }

}
