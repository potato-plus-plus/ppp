class Currency {
    constructor(name, causeUpdate, type) {
        this.name = name;
        this.amount = 0;
        this.perClick = 0;
        this.delay = 1000;
        this.perDelay = 0;

        this.ticks = 0;

        this.causeUpdate = causeUpdate;

        this.interval = setInterval(() => { this.tick() }, 200);

        this.type = type;
    }

    upgrade({ perClick, delay, perDelay }) {
        this.perClick += perClick;
        this.delay /= delay;
        this.perDelay += perDelay;

        clearInterval(this.interval);
        this.interval = setInterval(() => { this.tick() }, 200);
        this.causeUpdate();
    }

    click() {
        this.amount += this.perClick;
        this.causeUpdate();
    }

    tick() {
        this.ticks += 200;
        this.amount += Math.floor(this.ticks / this.delay) * this.perDelay;
        this.ticks = this.ticks % this.delay;
        if (!this.causeUpdate) return;
        this.causeUpdate();
    }
}

class Factory {
    constructor(name, costs, upgrades, costInc, causeUpdate, isUpgrade, type) {
        this.name = name;
        this.costs = costs;
        this.upgrades = upgrades;
        this.costInc = costInc;
        this.amount = 0;
        this.causeUpdate = causeUpdate;
        this.isUpgrade = isUpgrade;
        this.canUse = true;

        this.type = type;
    }

    buy(currencies) {
        if (!this.canUse) return;
        for (let currency in this.costs) {
            if (this.costs[currency] > currencies[currency].amount) return;
        }
        for (let currency in this.costs) {
            let curr = currencies[currency];
            curr.amount -= this.costs[currency];
            this.costs[currency] = Math.round(this.costs[currency] * this.costInc);
        }
        for (let upgrade in this.upgrades) {
            currencies[upgrade].upgrade(this.upgrades[upgrade]);
        }
        if (this.isUpgrade) this.canUse = false;
        this.amount++;
        this.causeUpdate();
    }
}

export {
    Currency,
    Factory
};