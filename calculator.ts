//simple typescript project just to show usage of typescript features like types 
type Data ={
    amount: number,
    annualContribution: number,
    expectedReturn: number,
    duration: number
}

type Result ={
    year: number,
    totalContribution: number,
    interestEarned: number,
    totalAmount: number
}

function calculateInvestment(data: Data): Result[]{

    const results: Result[] = [];
    let totalAmount = data.amount;
    let totalContribution = data.amount;
    
    for (let year = 1; year <=data.duration; year++){
        //investment growth calculation
        totalAmount *= 1 + data.expectedReturn;
        totalContribution += data.annualContribution;
        totalAmount += data.annualContribution;

        results.push({
            year,
            totalAmount,
            totalContribution,
            interestEarned: totalAmount - totalContribution
        })

    }
    return results
}

function printResults(results: Result[]){
    console.log("Investment Results:");
    for (const result of results){
        console.log(
        `Year ${result.year}: ` +
        `Total: $${result.totalAmount.toFixed(2)}, `+
        `Contributions: $${result.totalContribution.toFixed(2)}, `+
        `Interest earned: $${result.interestEarned.toFixed(2)}`
        )
    }
        
}
const results = calculateInvestment({
    amount: 10000,
    annualContribution: 5000,
    expectedReturn: 0.1,
    duration: 5
});

printResults(results);
