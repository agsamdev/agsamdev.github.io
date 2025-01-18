// DOM Elements
let input = document.getElementById('cash');
let purchaseBtn = document.getElementById('purchase-btn');
let changeContainer = document.getElementById('change-container');
let changeDue = document.getElementById('change-due');

const currencyUnitValues = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
};

// Variables
let price = 19.5; // Price of the item
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

class CashRegister {
    constructor(price, cid, input) {
        this.price = price;
        this.cid = cid;
        this.input = input;
    }

    calculateChange() {
        let changeDue = (Number(this.input) - this.price).toFixed(2); // Calculate change
        let totalCID = this.cid.reduce((sum, currency) => sum + currency[1], 0).toFixed(2); // Total cash in drawer
    
        // Convert to cents to avoid floating-point precision issues
        let changeDueCents = Math.round(changeDue * 100);
        let totalCIDCents = Math.round(totalCID * 100);
    
        // Check if cash provided is less than the price
        if (changeDueCents < 0) {
            return { status: 'INSUFFICIENT_FUNDS', change: [] };
        }
        
        // Check if cash in drawer is less than the change due
        if (totalCIDCents < changeDueCents) {
            return { status: 'INSUFFICIENT_FUNDS', change: [] };
        }
        
        // Check if cash in drawer is equal to the change due
        if (totalCIDCents === changeDueCents) {
            // Sort the CID in descending order by currency value
            const sortedCid = [...this.cid].sort(
                (a, b) => currencyUnitValues[b[0]] - currencyUnitValues[a[0]]
            );
            return { status: 'CLOSED', change: sortedCid };
        }

        // Calculate change to be returned
        let change = [];
        let remainingChangeCents = changeDueCents;
        
        // Create a copy of cid and sort by currency value (highest to lowest)
      
        const sortedCid = this.cid.sort(
            (a, b) => currencyUnitValues[b[0]] - currencyUnitValues[a[0]]
        );

        for (const [currencyName, currencyTotal] of sortedCid) {
            const currencyValue = currencyUnitValues[currencyName];
            const currencyValueCents = Math.round(currencyValue * 100);
            const availableCents = Math.round(currencyTotal * 100);
            
            let currencyCount = 0;
            
            while (remainingChangeCents >= currencyValueCents && availableCents > currencyCount * currencyValueCents) {
                remainingChangeCents -= currencyValueCents;
                currencyCount++;
            }
            
            if (currencyCount > 0) {
                change.push([currencyName, currencyCount * currencyValue]);
            }
        }

        // If we couldn't make exact change
        if (remainingChangeCents > 0) {
            return { status: 'INSUFFICIENT_FUNDS', change: [] };
        }

        return { status: 'OPEN', change: change };
    }
}

// Function to format the display of change
const formatChangeDisplay = (result) =>{
    if (result.status === 'INSUFFICIENT_FUNDS') {
        return "<p style='color:rgb(255, 85, 85)'>Status: INSUFFICIENT_FUNDS</p>";
    }
    
    let display = `<p style='color:rgb(255, 85, 85)'>Status: ${result.status}</p>`;
    
    // For both OPEN and CLOSED status, display the change
    if (result.change.length > 0) {
        result.change.forEach(([currency, amount]) => {
            if (amount > 0) {
                display += `<p style="font-size: 0.8rem; font-weight: 600; cursor: pointer; background-color: #333; padding: 0.5rem; margin-bottom: 0.5rem; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='#444'" onmouseout="this.style.backgroundColor='#333'"> ${currency}: <span style="font-weight: 400;">$${amount.toFixed(2)}</span></p>`;
            }
        });
    }
    
    return display;
}

// Event listener for the Purchase button
purchaseBtn.addEventListener('click', () => {
const cashValue = parseFloat(input.value);

    if (isNaN(cashValue) || cashValue < 0) {
        alert('Please enter a valid cash amount.');
        return;
    }

    if (cashValue < price) {
        alert('Customer does not have enough money to purchase the item');
        changeDue.innerHTML = "<p style='color:rgb(255, 85, 85)'>Customer does not have enough money to purchase the item</p>";
        return;
    }
    
    if (cashValue === price) {
        changeDue.innerHTML = "<p style='color:rgb(255, 85, 85)'>No change due - customer paid with exact cash</p>";
        return;
    }

    const cashRegister = new CashRegister(price, cid, cashValue);
    const result = cashRegister.calculateChange();
    changeDue.innerHTML = formatChangeDisplay(result);
});

// Display initial cash-in-drawer
cid.forEach(element => {
    if (element[1] > 0) {
        changeDue.innerHTML += `<p style="font-size: 0.8rem; font-weight: 600; cursor: pointer; background-color: #333; padding: 0.5rem; margin-bottom: 0.5rem; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='#444'" onmouseout="this.style.backgroundColor='#333'"> ${element[0]}: <span style="font-weight: 400;">$${element[1].toFixed(2)}</span></p>`;
    }
});
