const prices = {
    garamont: {
        antiqua_medio: 38,
        antiqua_initio: 40,
        cursive_medio: 41,
        cursive_initio: 42,
    },
    cicero: {
        antiqua_medio: 27,
        antiqua_initio: 28,
        cursive_medio: 29,
        cursive_initio: 30,
    },
    mittel: {
        antiqua_medio: 23,
        antiqua_initio: 24,
        cursive_medio: 25,
        cursive_initio: 26,
    },
    bible: {
        antiqua_medio: 17,
        antiqua_principio: 18,
    },
    text: {
        antiqua_medio: 16,
        antiqua_initio: 17,
        cursive_mixed: 18,
    },
};

function calculateQuote() {
    const paperType = document.getElementById('paper-type').value;
    const style = document.getElementById('style').value;
    const sheets = parseInt(document.getElementById('sheets').value);
    const marginalia = document.getElementById('marginalia').checked;

    let pricePerSheet = 0;
    if (prices[paperType] && prices[paperType][style]) {
        pricePerSheet = prices[paperType][style];
    }

    if (marginalia) {
        pricePerSheet += 2.5;
    }

    const totalCost = pricePerSheet * sheets;

    const resultDiv = document.getElementById('quote-result');
    if (pricePerSheet > 0) {
        resultDiv.innerHTML = `Estimated cost: ${totalCost.toFixed(2)} Batzen`;
    } else {
        resultDiv.innerHTML = 'The selected combination is not available.';
    }
}
