(async function () {
  const fetchResult = await fetch("./data.json");
  const response = await fetchResult.json();

  let employees = response;
  let selectedEmployeeID = employees[0].id;
  let selectedEmployee = employees[0];

  const employeesList = document.querySelector(".employees__name--list");
  const employeeInfo = document.querySelector(".employees__single--list");

  const createEmployee = document.querySelector(".createEmployee");
  const addEmployee = document.querySelector(".addEmployee");
  const employeeForm = document.querySelector(".addEmployee_form");

  // getting single employee details
  employeesList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && selectedEmployeeID !== e.target.id) {
      selectedEmployeeID = e.target.id;
      renderEmployeeList();
      renderSingleEmployee();
    }
    if (e.target.tagName === "I") {
      console.log(e.target.parentNode.id);

      employees = employees.filter(
        (emp) => String(emp.id) !== e.target.parentNode.id
      );

      if (String(selectedEmployeeID) === e.target.parentNode.id) {
        selectedEmployeeID = employees[0]?.id || -1;
        selectedEmployee = employees[0] || {};
        renderSingleEmployee();
      }
      renderEmployeeList();
    }
  });

  // open Modal on click
  createEmployee.addEventListener("click", function () {
    addEmployee.style.display = "flex";
  });
  // close Modal on click
  addEmployee.addEventListener("click", function (e) {
    if (e.target.className === "addEmployee") {
      addEmployee.style.display = "none";
    }
  });

  const dobInput = document.querySelector(".addEmployee_form--dob");
  dobInput.max = `${new Date().getFullYear() - 18} - ${new Date()
    .toISOString()
    .slice(5, 10)}`;

  employeeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(employeeForm);
    const values = [...formData.entries()];

    let empData = {};

    values.forEach((val) => {
      empData[val[0]] = val[1];
    });

    empData.id = employees[employees.length - 1].id + 1;
    empData.age =
      new Date().getFullYear() - parseInt(empData.dob.slice(0, 4), 10);

    empData.imageUrl =
      empData.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png";

    employees.push(empData);
    renderEmployeeList();
    employeeForm.reset();
    addEmployee.style.display = "none";
  });

  //   Render Function
  const renderEmployeeList = () => {
    employeesList.innerHTML = "";

    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employees__name--item");

      if (parseInt(selectedEmployeeID, 10) === emp.id) {
        selectedEmployee = emp;
        employee.classList.add("selected");
      }
      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="deleteEmpDetail">&times;</i>`;

      employeesList.append(employee);
    });
  };

  const renderSingleEmployee = () => {
    if (selectedEmployeeID === -1) {
      employeeInfo.innerHTML = "";
      return;
    }
    employeeInfo.innerHTML = `
    <div class='imgWrap'><img src="${selectedEmployee.imageUrl}" /></div>    
    <div class='contentWrap'>
        <span class="employees__single--heading">
        ${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})
        </span>
        <span>${selectedEmployee.address}</span>
        <span>${selectedEmployee.email}</span>
        <span>Mobile - ${selectedEmployee.contactNumber}</span>
        <span>DOB - ${selectedEmployee.dob}</span>
    </div>    
    
  `;
  };

  renderEmployeeList();
  if (selectedEmployee) renderSingleEmployee();
})();
