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

const styleLabels = {
    antiqua_medio: "Antiqua only, in medio",
    antiqua_initio: "Antiqua, ab initio",
    antiqua_principio: "Antiqua, à principio",
    cursive_medio: "Cursive or mixed, in medio",
    cursive_initio: "Cursive or mixed, ab initio",
    cursive_mixed: "Cursive, or mixed",
};

function updateStyleOptions() {
    const font = document.getElementById('font').value;
    const styleDropdown = document.getElementById('style');
    styleDropdown.innerHTML = ''; // Clear existing options

    const availableStyles = Object.keys(prices[font]);

    for (const styleKey of availableStyles) {
        const option = document.createElement('option');
        option.value = styleKey;
        option.textContent = styleLabels[styleKey];
        styleDropdown.appendChild(option);
    }
    updatePreview(); // Update preview when styles change
}

function updatePreview() {
    const font = document.getElementById('font').value;
    const style = document.getElementById('style').value;
    const previewContent = document.getElementById('preview-content');

    // Remove all existing font and position classes
    previewContent.className = '';

    // Add font class
    previewContent.classList.add(`font-${font}`);

    // Add position class
    if (style.includes('medio')) {
        previewContent.classList.add('pos-in-medio');
    } else if (style.includes('initio') || style.includes('principio')) {
        previewContent.classList.add('pos-ab-initio');
    }

    // Add style class
    if (style.includes('cursive')) {
        previewContent.classList.add('style-cursive');
    }
}


window.onload = function() {
    updateStyleOptions();
};

function calculateQuote() {
    const font = document.getElementById('font').value;
    const style = document.getElementById('style').value;
    const sheets = parseInt(document.getElementById('sheets').value);
    const marginalia = document.getElementById('marginalia').checked;

    let pricePerSheet = 0;
    if (prices[font] && prices[font][style]) {
        pricePerSheet = prices[font][style];
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
