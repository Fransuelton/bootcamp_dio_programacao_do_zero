function calculatePlayerMatches(victoryBalance, defeatBalance) {
  let result = victoryBalance - defeatBalance;

  let level;

  const immortalLimit = 101;
  const legendaryLimit = 100;
  const diamondLimit = 90;
  const goldLimit = 80;
  const silverLimit = 50;
  const bronzeLimit = 20;

  if (result >= immortalLimit) {
    level = "Imortal";
  } else if (result >= legendaryLimit) {
    level = "Lendário";
  } else if (result >= diamondLimit) {
    level = "Diamante";
  } else if (result >= goldLimit) {
    level = "Ouro";
  } else if (result >= silverLimit) {
    level = "Prata";
  } else if (result >= bronzeLimit) {
    level = "Bronze";
  } else {
    level = "Ferro";
  }

  console.log(
    `O Herói tem de saldo de ${victoryBalance}  vitórias e está no nível de ${level}`
  );
}

calculatePlayerMatches(200, 123);
