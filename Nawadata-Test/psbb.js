function calculateBuses(families, members) {
  if (families !== members.length) {
    return "Input must be equal with count of family";
  }

  let buses = 0;

  members.sort((a, b) => b - a);

  let i = 0;
  let j = members.length - 1;

  while (i <= j) {
    if (members[i] + members[j] <= 4) {
      j--;
    }
    i++;
    buses++;
  }

  return `Minimum bus required is : ${buses}`;
}

let families = 5;
let members = [1, 2, 4, 3, 3];

console.log(calculateBuses(families, members));

families = 8;
members = [2, 3, 4, 4, 2, 1, 3, 1]; // 4 4 3 3 2 2 1 1
console.log(calculateBuses(families, members));

families = 5;
members = [1, 5];
console.log(calculateBuses(families, members));
