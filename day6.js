 
document.getElementById("creditForm").addEventListener("submit", function(e) {
    e.preventDefault();

  let income = parseFloat(document.getElementById("income").value);
  let loanAmount = parseFloat(document.getElementById("loanAmount").value);
  let balance = parseFloat(document.getElementById("currentBalance").value);
  let creditHistory = document.getElementById("creditHistory").value;
  let depositDate = new Date(document.getElementById("depositDate").value);
  let loanDate = new Date(document.getElementById("loanDate").value);
  let repayment = parseInt(document.getElementById("repayment").value);
  let accountType = document.getElementById("accountType").value;

  let score = 0;
  let now = new Date();

  
  score += balance >= loanAmount ? 10 : -10;

  if (creditHistory === "yes") score += 10;


  let diffDeposit = (now - depositDate) / (1000 * 60 * 60 * 24);
  if (diffDeposit <= 30) score += 5;

 
  let diffLoan = (now - loanDate) / (1000 * 60 * 60 * 24);
  if (diffLoan > 180) score += 10;

 
  if (repayment < 6) score += 5;

  if (accountType === "current") score += 10;
  else if (accountType === "savings") score += 5;

  let maxEligibleLoan = income * 0.45;
  let eligible = score > 30 && loanAmount <= maxEligibleLoan;

    let result = `Score: ${score} points<br>`;
    result += eligible ? " Loan Approved" : " Loan Denied";
  
    document.getElementById("result").innerHTML = result;
  });
