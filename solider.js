//1 Характеристики
const solider = {
  name: "Bob",
  HP: 10,
  Gun: {
    name: "Глок",
    patron: 30,
  },
  supplies: 3,
  //2 Действия
  fire: function () {
    if (this.Gun.patron > 0) {
      this.Gun.patron = this.Gun.patron - 1;
      return "бах-бах";
    } else {
      return "обойма пуста. Перезарядитесь";
    }
  },
  recharge: function () {
    if (this.supplies > 0) {
      this.supplies = this.supplies - 1;
      this.Gun.patron = 30;
      return "Перезарядка...";
    } else {
      return "не осталось припасов.";
    }
  },
  hurt: function () {
    if (this.HP === 1) {
      this.HP--;
      console.log("ты проиграл");
    } else if (this.HP === 0) {
      return "ты проиграл";
    } else {
      return this.HP--;
    }
  },
};
solider.hurt();
console.log(solider.HP);
