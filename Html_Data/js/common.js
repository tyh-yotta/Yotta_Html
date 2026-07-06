document.addEventListener('DOMContentLoaded', () => {
    // Load top banner message from message.js variable (bypasses file:// CORS issue)
    if (typeof siteMessage !== 'undefined') {
        const trimmedText = siteMessage.trim();
        if (trimmedText) {
            const banner = document.getElementById('topBanner');
            if (banner) {
                banner.innerHTML = `<div class="marquee-content">${trimmedText}</div>`;
                banner.style.display = 'block';
            }
        }
    }

    // Render dynamic menus
    renderMainMenu();
    renderSidebar();
});

// Render main top navigation menu and footer links
function renderMainMenu() {
    const navContainer = document.getElementById('mainNavLinks');
    const footerNavContainer = document.getElementById('footerNavLinks');
    if (typeof mainMenuData === 'undefined') return;

    const isEn = window.currentLang === 'en';
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const pathParts = window.location.pathname.split('/');
    const isSubfolder = ['products', 'about', 'news', 'support', 'contact', 'solutions', 'location', 'location'].includes(pathParts[pathParts.length - 2]);
    const basePath = isSubfolder ? '../' : '';
    let html = '';
    let footerHtml = '';

    mainMenuData.forEach(item => {
        const itemTitle = isEn ? item.title_en : item.title_zh;
        const itemPath = item.link.split('/').pop();
        
        let isActive = false;
        // "產品介紹" 包含任何以 product 開頭的頁面 (product.html, products_a10x.html)
        if (item.id === 'products' && currentPath.startsWith('product')) {
            isActive = true;
        } else if (itemPath === currentPath && itemPath !== '#') {
            isActive = true;
        }

        const activeClass = isActive ? 'active' : '';
        html += `<a href="${basePath}${item.link}" class="nav-item ${activeClass}">${itemTitle}</a>`;
        footerHtml += `<li><a href="${basePath}${item.link}">${itemTitle}</a></li>`;
    });

    if (navContainer) navContainer.innerHTML = html;
    if (footerNavContainer) footerNavContainer.innerHTML = footerHtml;
}

// Render dynamic sidebar menu based on categoryData and currentLang
function renderSidebar() {
    const menuContainer = document.getElementById('categoryMenu');
    if (!menuContainer || typeof categoryData === 'undefined') return;

    const isEn = window.currentLang === 'en';
    const pathParts = window.location.pathname.split('/');
    const isSubfolder = ['products', 'about', 'news', 'support', 'contact', 'solutions', 'location'].includes(pathParts[pathParts.length - 2]);
    const basePath = isSubfolder ? '../' : '';
    let html = '';
    
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const urlParams = new URLSearchParams(window.location.search);
    const modelQuery = urlParams.get('model');
    
    let activeSeries = null;
    if (currentPath === 'product.html' && modelQuery && typeof productData !== 'undefined') {
        const product = productData.find(p => p.model === modelQuery);
        if (product && product.series) {
            activeSeries = product.series;
        }
    }

    let anyItemActive = false;

    categoryData.forEach(group => {
        let hasActiveItem = false;
        let itemsHtml = '';
        
        group.items.forEach(item => {
            const itemTitle = isEn ? item.title_en : item.title_zh;
            const itemPath = item.link.split('/').pop();
            
            let isItemActive = false;
            if (currentPath === 'product.html' && activeSeries) {
                if ((item.title_en && item.title_en.includes(activeSeries)) || (item.title_zh && item.title_zh.includes(activeSeries))) {
                    isItemActive = true;
                }
            } else {
                if (itemPath === currentPath && itemPath !== '#') {
                    isItemActive = true;
                }
            }
            
            if (isItemActive) {
                hasActiveItem = true;
                anyItemActive = true;
            }
            
            const itemActiveClass = isItemActive ? 'active' : '';
            itemsHtml += `<li><a href="${basePath}${item.link}" class="${itemActiveClass}">${itemTitle}</a></li>`;
        });
        
        const groupTitle = isEn ? group.title_en : group.title_zh;
        // Determine if group should be open
        let isGroupOpen = hasActiveItem;
        // If we are on index.html or another page without any active sidebar item, fallback to default isOpen
        if (!hasActiveItem && ['index.html', 'about.html', 'contact.html', 'news.html'].includes(currentPath)) {
            isGroupOpen = group.isOpen;
        }

        const isOpenClass = isGroupOpen ? 'open' : '';
        const icon = isGroupOpen ? 'expand_less' : 'expand_more';
        const activeClass = isGroupOpen ? 'active' : '';

        html += `
            <li class="menu-group ${activeClass}">
                <div class="group-title" onclick="toggleSidebarGroup(this)">
                    ${groupTitle} <span class="material-symbols-outlined icon">${icon}</span>
                </div>
                <ul class="sub-menu ${isOpenClass}">
                    ${itemsHtml}
                </ul>
            </li>
        `;
    });

    menuContainer.innerHTML = html;
}

// Global function to toggle sidebar accordions
window.toggleSidebarGroup = function(element) {
    const parentLi = element.parentElement;
    const subMenu = parentLi.querySelector('.sub-menu');
    const icon = element.querySelector('.icon');

    const isOpen = subMenu.classList.contains('open');
    if (isOpen) {
        subMenu.classList.remove('open');
        parentLi.classList.remove('active');
        icon.textContent = 'expand_more';
    } else {
        subMenu.classList.add('open');
        parentLi.classList.add('active');
        icon.textContent = 'expand_less';
    }
};

// Re-render menus when language changes
window.addEventListener('languageChanged', () => {
    renderMainMenu();
    renderSidebar();
});
