import { getEmployees, getOrders } from "./database.js";

const employees = getEmployees();
const orders = getOrders();

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li data-type="employee" data-id="${employee.id}" data-name="${employee.name}">${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  let salesCount = 0;
  let employeeId = itemClicked.dataset.id;
  if (itemClicked.dataset.type === "employee") {
    for (const order of orders) {
      if (parseInt(employeeId) === order.employeeId) {
        salesCount++;
      }
    }
    window.alert(`${itemClicked.dataset.name} sold ${salesCount} products`);
  }
});
