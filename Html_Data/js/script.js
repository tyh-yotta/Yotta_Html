document.addEventListener('DOMContentLoaded', () => {
    // (Sidebar accordion logic has been moved to common.js dynamic renderer)

    // 1. Homepage Hero Slider Logic
    const heroSlider = document.getElementById('heroSlider');
    if (heroSlider) {
        const slides = heroSlider.querySelectorAll('.slide');
        const dots = heroSlider.querySelectorAll('.dot');
        let currentSlide = 0;
        let slideInterval;

        function goToSlide(index) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            currentSlide = index;
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            let nextIndex = (currentSlide + 1) % slides.length;
            goToSlide(nextIndex);
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetInterval();
            });
        });

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000); // Change image every 5 seconds
        }

        // Start autoplay
        resetInterval();
    }

    // 2. Image Gallery Logic (for product pages)
    const mainImage = document.getElementById('mainImage');
    const thumbs = document.querySelectorAll('.thumb');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remove active class from all thumbs
            thumbs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumb
            this.classList.add('active');
            
            // Swap main image source with a fade effect
            mainImage.style.opacity = '0.5';
            setTimeout(() => {
                mainImage.src = this.src;
                mainImage.style.opacity = '1';
            }, 150);
        });
    });

    // 3. Mobile Menu Toggle Placeholder
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            alert('Mobile menu toggle triggered!');
        });
    }
    // 4. Dynamic Specifications Table Rendering
    const tableBody = document.getElementById('specTableBody');
    const modelGrid = document.getElementById('modelGrid');

    function renderIndexContent() {
        const pathParts = window.location.pathname.split('/');
        const isSubfolder = ['products', 'about', 'news', 'support', 'contact', 'solutions', 'location'].includes(pathParts[pathParts.length - 2]);
        const basePath = isSubfolder ? '../' : '';

        if (tableBody) {
            tableBody.innerHTML = '';
            const targetSeries = tableBody.getAttribute('data-series');
            const filteredData = targetSeries ? productData.filter(p => p.series === targetSeries) : productData;

            filteredData.forEach(product => {
                const tr = document.createElement('tr');
                const encodedModel = encodeURIComponent(product.model);
                const productUrl = basePath ? `product.html?model=${encodedModel}` : `products/product.html?model=${encodedModel}`;
                tr.innerHTML = `
                    <td><a href="${productUrl}" style="color: var(--accent-color); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--primary-color)'" onmouseout="this.style.color='var(--accent-color)'"><strong>${product.model}</strong></a></td>
                    <td>${product.di}</td>
                    <td>${product.do}</td>
                    <td>${product.ai}</td>
                    <td>${product.ao}</td>
                    <td>${product.comm}</td>
                `;
                tableBody.appendChild(tr);
            });
        }

        if (modelGrid) {
            modelGrid.innerHTML = '';
            const targetSeries = modelGrid.getAttribute('data-series');
            const filteredData = targetSeries ? productData.filter(p => p.series === targetSeries) : productData;
            
            filteredData.forEach(product => {
                const card = document.createElement('a');
                // If we are in root, product page is products/product.html. If in products/, it's just product.html
                const encodedModel = encodeURIComponent(product.model);
                const productUrl = basePath ? `product.html?model=${encodedModel}` : `products/product.html?model=${encodedModel}`;
                card.href = productUrl;
                card.className = 'model-card';
                card.title = window.currentLang === 'zh' ? `前往 ${product.model} 專屬頁面` : `Go to ${product.model} page`;
                
                card.innerHTML = `
                    <div class="model-card-img-wrapper">
                        <img src="${basePath}${product.image}" alt="${product.model}" class="model-card-img">
                    </div>
                    <div class="model-card-title">${product.model}</div>
                `;
                modelGrid.appendChild(card);
            });
        }
    }
    
    renderIndexContent();
    window.addEventListener('languageChanged', () => {
        renderIndexContent();
        renderProductDetail();
    });

    // 5. Dynamic Product Detail Page Logic
    function renderProductDetail() {
        // Check if we are on the product detail page and have a model parameter
        const urlParams = new URLSearchParams(window.location.search);
        const modelQuery = urlParams.get('model');
        
        if (!modelQuery || !document.getElementById('productDetailArea')) return;

        const product = productData.find(p => p.model === modelQuery);
        if (!product) return;

        const isEn = window.currentLang === 'en';
        const pathParts = window.location.pathname.split('/');
        const isSubfolder = ['products', 'about', 'news', 'support', 'contact', 'solutions', 'location'].includes(pathParts[pathParts.length - 2]);
        const basePath = isSubfolder ? '../' : '';

        // Update Text & Specs
        document.title = `${product.model} | Yottacontrol`;
        document.getElementById('breadcrumbModel').textContent = product.model;

        // Dynamic breadcrumb series update
        const breadcrumbSeries = document.getElementById('breadcrumbSeries');
        if (breadcrumbSeries && product.series) {
            let matchedSeries = null;
            categoryData.forEach(cat => {
                cat.items.forEach(item => {
                    if ((item.title_en && item.title_en.includes(product.series)) || (item.title_zh && item.title_zh.includes(product.series))) {
                        matchedSeries = item;
                    }
                });
            });
            
            if (matchedSeries) {
                const linkParts = matchedSeries.link.split('/');
                const fileName = linkParts[linkParts.length - 1];
                breadcrumbSeries.href = fileName;
                breadcrumbSeries.textContent = isEn ? matchedSeries.title_en : matchedSeries.title_zh;
            }
        }

        document.getElementById('detailTitle').textContent = product.model;
        document.getElementById('detailImage').src = `${basePath}${product.image}`;
        
        const descEl = document.getElementById('detailDesc');
        if (descEl) {
            descEl.textContent = isEn && product.desc_en ? product.desc_en : (product.desc || '');
        }
        
        document.getElementById('detailDi').textContent = product.di || '-';
        document.getElementById('detailDo').textContent = product.do || '-';
        document.getElementById('detailAi').textContent = product.ai || '-';
        document.getElementById('detailAo').textContent = product.ao || '-';
        document.getElementById('detailComm').textContent = product.comm || '-';

        // Render Dynamic Tabs First (so other scripts can find generated elements)
        const tabsContainer = document.getElementById('dynamicTabsContainer');
        const panesContainer = document.getElementById('dynamicPanesContainer');
        
        if (tabsContainer && panesContainer) {
            const specHref = product.specLink && product.specLink !== '#' ? basePath + product.specLink : '#';
            const manualHref = product.manualLink && product.manualLink !== '#' ? basePath + product.manualLink : '#';
            
            const specOnClick = specHref === '#' ? `onclick="alert(window.currentLang === 'en' ? 'Coming Soon' : '建置中'); return false;"` : `target="_blank"`;
            const manualOnClick = manualHref === '#' ? `onclick="alert(window.currentLang === 'en' ? 'Coming Soon' : '建置中'); return false;"` : `target="_blank"`;

            const defaultTabs = [
                {
                    id: "tab-docs",
                    title: isEn ? "Tech Docs" : "技術文件",
                    title_en: "Tech Docs",
                    content: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">${isEn ? 'Technical Documents' : '技術文件下載'}</h3>
                              <p style="color: var(--text-light); margin-bottom: 20px;">${isEn ? 'Download product specifications and manuals.' : '取得產品規格書與使用手冊，以協助您快速設定與操作。'}</p>
                              <div id="dynamicDocsContainer"></div>`
                },
                {
                    id: "tab-faq",
                    title: isEn ? "FAQ" : "常見問題",
                    title_en: "FAQ",
                    content: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">常見問題 (FAQ)</h3>
                              <p style="color: var(--text-main); line-height: 1.6;">
                                  <strong>Q: 此產品支援哪些通訊協定？</strong><br>
                                  <span style="color: var(--text-light);">A: 本產品支援標準的 Modbus RTU 通訊協定，能輕易整合至工業自動化系統。</span>
                              </p>
                              <p style="color: var(--text-main); line-height: 1.6; margin-top: 15px;">
                                  <strong>Q: 可以安裝在標準導軌上嗎？</strong><br>
                                  <span style="color: var(--text-light);">A: 是的，模組背面設計有標準 35mm DIN Rail 卡榫，可以直接扣上導軌。</span>
                              </p>`
                },
                {
                    id: "tab-apps",
                    title: isEn ? "Applications" : "產品應用",
                    title_en: "Applications",
                    content: `<h3 style="margin-bottom: 15px; color: var(--primary-color);">${isEn ? 'Applications' : '產品應用'}</h3>
                              <div class="application-tags" id="detailApplications"></div>`
                }
            ];

            const tabsToRender = product.tabs && product.tabs.length > 0 ? product.tabs : defaultTabs;

            tabsContainer.innerHTML = '';
            panesContainer.innerHTML = '';

            tabsToRender.forEach((tab) => {
                const tabTitle = isEn && tab.title_en ? tab.title_en : tab.title;
                const tabContent = isEn && tab.content_en ? tab.content_en : tab.content;
                
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'inline-book-tab';
                btn.setAttribute('data-target', tab.id);
                btn.setAttribute('onclick', 'switchTab(this)');
                btn.innerHTML = `<span class="tab-text">${tabTitle}</span>`;
                tabsContainer.appendChild(btn);

                const pane = document.createElement('div');
                pane.className = 'inline-drawer-pane';
                pane.id = tab.id;
                pane.innerHTML = tabContent;
                panesContainer.appendChild(pane);
            });

            // Inject dynamic documents if the container exists
            const docsContainer = document.getElementById('dynamicDocsContainer');
            if (docsContainer) {
                let docsContentHtml = '';
                if (product.documents && product.documents.length > 0) {
                    docsContentHtml = '<ul style="list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--border-color);">' + product.documents.map(doc => {
                        const docName = isEn && doc.name_en ? doc.name_en : doc.name;
                        const icon = doc.icon || '📄';
                        const link = doc.link && doc.link !== '#' ? basePath + doc.link : '#';
                        const onClick = link === '#' ? `onclick="alert(window.currentLang === 'en' ? 'Coming Soon' : '建置中'); return false;"` : `target="_blank"`;
                        return `<li style="border-bottom: 1px solid var(--border-color);">
                                    <a href="${link}" ${onClick} style="display: flex; align-items: center; padding: 12px 15px; text-decoration: none; color: var(--text-main); transition: background 0.2s;" onmouseover="this.style.background='rgba(128,128,128,0.1)'" onmouseout="this.style.background='transparent'">
                                        <span style="font-size: 1.5rem; margin-right: 15px;">${icon}</span>
                                        <span style="flex-grow: 1; font-weight: 500; font-size: 1.05rem;">${docName}</span>
                                        <span class="material-symbols-outlined" style="color: var(--primary-color);">download</span>
                                    </a>
                                </li>`;
                    }).join('') + '</ul>';
                } else {
                    // Fallback to old specLink / manualLink logic
                    docsContentHtml = `<ul style="list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--border-color);">
                        <li style="border-bottom: 1px solid var(--border-color);">
                            <a href="${specHref}" ${specOnClick} style="display: flex; align-items: center; padding: 12px 15px; text-decoration: none; color: var(--text-main); transition: background 0.2s;" onmouseover="this.style.background='rgba(128,128,128,0.1)'" onmouseout="this.style.background='transparent'">
                                <span style="font-size: 1.5rem; margin-right: 15px;">📄</span>
                                <span style="flex-grow: 1; font-weight: 500; font-size: 1.05rem;">${isEn ? 'Spec Sheet' : '下載文件'}</span>
                                <span class="material-symbols-outlined" style="color: var(--primary-color);">download</span>
                            </a>
                        </li>
                        <li style="border-bottom: 1px solid var(--border-color);">
                            <a href="${manualHref}" ${manualOnClick} style="display: flex; align-items: center; padding: 12px 15px; text-decoration: none; color: var(--text-main); transition: background 0.2s;" onmouseover="this.style.background='rgba(128,128,128,0.1)'" onmouseout="this.style.background='transparent'">
                                <span style="font-size: 1.5rem; margin-right: 15px;">📘</span>
                                <span style="flex-grow: 1; font-weight: 500; font-size: 1.05rem;">${isEn ? 'User Manual' : '下載使用手冊'}</span>
                                <span class="material-symbols-outlined" style="color: var(--primary-color);">download</span>
                            </a>
                        </li>
                    </ul>`;
                }
                docsContainer.innerHTML = docsContentHtml;
            }
        }

        // Update Features
        const features = isEn && product.features_en ? product.features_en : product.features;
        const featuresHtml = features.map(f => `<li><span class="material-symbols-outlined icon">check_circle</span> ${f}</li>`).join('');
        document.getElementById('detailFeatures').innerHTML = featuresHtml;

        // Update Applications (Now targeting the container generated by tabs)
        const detailApps = document.getElementById('detailApplications');
        if (detailApps && product.applications) {
            const appsHtml = product.applications.map(app => {
                const appName = isEn && app.name_en ? app.name_en : app.name;
                return `<a href="#" data-link="${basePath}${app.link}" class="app-tag">${appName}</a>`;
            }).join('');
            detailApps.innerHTML = appsHtml;

            const appTags = detailApps.querySelectorAll('.app-tag');
            
            const iframeContainer = document.createElement('div');
            iframeContainer.id = 'solutionContainer';
            iframeContainer.style = 'display: none; margin-top: 20px; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; width: 100%; height: 500px; position: relative;';
            
            iframeContainer.innerHTML = `
                <div style="padding: 10px; background: var(--bg-card); border-bottom: 1px solid var(--border-color); display: flex; justify-content: flex-end; gap: 10px;">
                    <a href="#" id="solutionNewWindowBtn" target="_blank" class="btn btn-primary" title="${isEn ? 'Open in New Window' : '新開網頁開啟'}" style="padding: 8px; font-size: 0; width: 36px; height: 36px; display: inline-flex; justify-content: center; align-items: center;">
                        <span class="material-symbols-outlined" style="font-size: 20px;">open_in_new</span>
                    </a>
                </div>
                <iframe id="solutionIframe" src="" frameborder="0" style="width: 100%; height: calc(100% - 57px); background: transparent; display: block;"></iframe>
            `;
            detailApps.appendChild(iframeContainer);

            const iframe = iframeContainer.querySelector('#solutionIframe');
            const newWindowBtn = iframeContainer.querySelector('#solutionNewWindowBtn');

            appTags.forEach(tag => {
                tag.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    appTags.forEach(t => t.classList.remove('active'));
                    tag.classList.add('active');
                    
                    const link = tag.getAttribute('data-link');
                    if (link && !link.endsWith('#')) {
                        iframe.src = link;
                        newWindowBtn.href = link;
                        newWindowBtn.style.display = 'inline-flex';
                        iframeContainer.style.display = 'block';
                        
                        const topSection = document.querySelector('.product-top-section');
                        if (topSection) topSection.style.minHeight = '500px';
                        
                        setTimeout(() => {
                            iframeContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }, 100);
                    } else {
                        // Dummy link
                        iframeContainer.style.display = 'none';
                        const topSection = document.querySelector('.product-top-section');
                        if (topSection) topSection.style.minHeight = '200px';
                        alert(window.currentLang === 'en' ? "Detailed application page coming soon!" : "此應用案例網頁尚在建置中，敬請期待！");
                    }
                });
            });
        }
    }

    renderProductDetail();
});



