document.addEventListener('DOMContentLoaded', () => {
    // 1. Get Product Model from URL Parameters
    const params = new URLSearchParams(window.location.search);
    const modelParam = params.get('model');

    if (!modelParam) {
        document.getElementById('productModelTitle').textContent = '找不到產品';
        return;
    }

    // 2. Find Product in Database
    const product = productData.find(p => p.model === modelParam);

    if (!product) {
        document.getElementById('productModelTitle').textContent = '找不到指定的產品型號';
        return;
    }

    function renderProductContent() {
        const isEn = window.currentLang === 'en';

        // Titles and Breadcrumbs
        document.getElementById('productModelTitle').textContent = product.model;
        document.getElementById('breadcrumbCurrent').textContent = product.model;
        document.getElementById('prodTitle').textContent = isEn ? `${product.model} Remote I/O Module` : `${product.model} 遠端 I/O 模組`;
        
        // Image
        document.getElementById('prodImage').src = product.image;
        
        // Quick Specs Highlights
        const specsContainer = document.getElementById('prodSpecs');
        const specs = isEn ? [
            { label: 'Digital Input (DI)', value: product.di },
            { label: 'Digital Output (DO)', value: product.do },
            { label: 'Analog Input (AI)', value: product.ai },
            { label: 'Analog Output (AO)', value: product.ao },
            { label: 'Communication', value: product.comm }
        ] : [
            { label: '數位輸入 (DI)', value: product.di },
            { label: '數位輸出 (DO)', value: product.do },
            { label: '類比輸入 (AI)', value: product.ai },
            { label: '類比輸出 (AO)', value: product.ao },
            { label: '通訊介面', value: product.comm }
        ];
        
        let specsHTML = '';
        specs.forEach(s => {
            if (s.value && s.value !== '-') {
                specsHTML += `<div class="spec-item"><span class="spec-label">${s.label}:</span> <span class="spec-value">${s.value}</span></div>`;
            }
        });
        specsContainer.innerHTML = specsHTML;

        // Features
        const featuresContainer = document.getElementById('prodFeatures');
        if (featuresContainer) {
            let featuresHTML = '';
            const featureList = (isEn && product.features_en) ? product.features_en : product.features;
            if (featureList) {
                featureList.forEach(f => {
                    featuresHTML += `<li><span class="material-symbols-outlined">check_circle</span> ${f}</li>`;
                });
            }
            featuresContainer.innerHTML = featuresHTML;
        }

        // Manual Link (optional, only set href if valid)
        const downloadManualBtn = document.getElementById('downloadManualBtn');
        if (downloadManualBtn && product.manualLink) {
            downloadManualBtn.onclick = () => window.open(product.manualLink, '_blank');
        }

        // Wiring Diagram
        const wiringImg = document.getElementById('prodWiring');
        if (wiringImg) {
            if (product.wiringImage) {
                wiringImg.src = product.wiringImage;
            } else {
                wiringImg.alt = isEn ? "No wiring diagram available" : "尚無配線圖";
            }
        }

        // Applications
        const appsContainer = document.getElementById('prodApps');
        if (appsContainer) {
            appsContainer.innerHTML = ''; // Clear existing
            if(product.applications) {
                product.applications.forEach(app => {
                    const isObj = typeof app === 'object';
                    let appName = isObj ? app.name : app;
                    if (isEn && isObj && app.name_en) {
                        appName = app.name_en;
                    }
                    const appLink = isObj ? app.link : '#';
                    const isClickable = isObj && app.link !== '#';
                    
                    const card = document.createElement(isClickable ? 'a' : 'div');
                    card.className = 'app-card';
                    card.style.textDecoration = 'none';
                    
                    if (isClickable) {
                        card.href = appLink;
                        card.addEventListener('click', (e) => {
                            e.preventDefault();
                            document.getElementById('appIframeWrapper').style.display = 'block';
                            document.getElementById('appIframe').src = appLink;
                            
                            // Highlight active card
                            document.querySelectorAll('.app-card').forEach(c => {
                                c.style.borderColor = 'var(--border-color)';
                                c.style.background = 'var(--bg-page)';
                                c.querySelector('.app-icon').style.color = 'var(--accent-color)';
                                c.querySelector('.app-text').style.color = 'var(--primary-dark)';
                            });
                            
                            card.style.borderColor = 'var(--primary-color)';
                            card.style.background = 'var(--primary-color)';
                            card.querySelector('.app-icon').style.color = 'white';
                            card.querySelector('.app-text').style.color = 'white';
                        });
                    }
                    
                    card.innerHTML = `
                        <span class="material-symbols-outlined app-icon">domain</span>
                        <span class="app-text">${appName}</span>
                    `;
                    appsContainer.appendChild(card);
                });
            }
        }
    }

    renderProductContent();
    window.addEventListener('languageChanged', renderProductContent);
});
