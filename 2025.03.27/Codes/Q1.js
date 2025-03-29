function max_purchase_for(budget, keyboard_prices, mouse_prices) {
    let max_amount = -1;

    for (let i = 0; i < keyboard_prices.length; i++) {
        for (let j = 0; j < mouse_prices.length; j++) {
            let total = keyboard_prices[i] + mouse_prices[j];
            if (total <= budget && total > max_amount) {
                max_amount = total;
            }
        }
    }

    return max_amount;
}


console.log(max_purchase_for(10, [3, 1], [5, 2, 8])); 

