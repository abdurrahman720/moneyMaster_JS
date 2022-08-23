// select best five
const playerArray = [];

function getPlayer(player) {

  const tableBody = document.getElementById("player-list");
  tableBody.innerHTML = "";
  for (let i = 0; i < player.length; i++) {
    if (i < 5) {
      const pName = playerArray[i].playerName;

      const tr = document.createElement("tr");
      tr.innerHTML = `
      <th>${i + 1}</th>
      <td>${pName}</td>
    `;
      tableBody.appendChild(tr);
    } else {
      return false(alert("You can not add more than five players"));
    }
  }
}

//  Button Disable
function DisableNextButton(btnId) {
  const disableButton = document.getElementById(btnId);
  document.getElementById(btnId).disabled = "true";
  disableButton.style.background = "gray";
}

function playeradd(elemenButton) {
  const playerName = elemenButton.parentNode.children[0].innerText;
  const playerId = elemenButton.id;
  const playerObj = { playerName: playerName };
  playerArray.push(playerObj);
  getPlayer(playerArray);
  DisableNextButton(playerId);
}

// Budget calculation sidebar second starts

document.getElementById("btn-calculate").addEventListener("click", function () {
  const perPlayerFunction = getFieldValue("per-player-field");
  const playerListLength = document.getElementById("player-list");
  const playerListChild = playerListLength.children.length;
  const playerListChildFloat = parseFloat(playerListChild);
  const playerPrice = playerListChildFloat * perPlayerFunction;
  const playerExpense = document.getElementById("player-expenses");
  playerExpense.innerText = playerPrice;
});
// button total
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const managerFieldValue = getFieldValue("manager-field");
    const coachFieldValue = getFieldValue("coach-field");
    const playerExpenseAmount = document.getElementById("player-expenses");
    const getPlayerExpenseAmount = playerExpenseAmount.innerText;
    const getPlayerExpenseFloat = parseFloat(getPlayerExpenseAmount);
    const calculateTotalCost =
      managerFieldValue + coachFieldValue + getPlayerExpenseFloat;
    // final TotalCost
    const finalTotalCost = document.getElementById("final-total");
    finalTotalCost.innerText = calculateTotalCost;
  });
