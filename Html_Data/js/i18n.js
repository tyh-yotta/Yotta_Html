const translations = {
    "zh": {
        "title.index": "Yottacontrol | 專業工業自動化設備製造商",
        "title.about": "關於我們 | Yottacontrol",
        "title.news": "最新消息 | Yottacontrol",
        "title.support": "技術支援 | Yottacontrol",
        "title.products": "產品介紹 | Yottacontrol",
        "title.a10x": "A-10x 系列 I/O 模組 | Yottacontrol",
        "title.contact": "聯絡我們 | Yottacontrol",
        "title.location": "交通位置 | Yottacontrol",
        "search.placeholder": "搜尋產品...",
        "footer.about": "Yottacontrol 致力於提供高品質的自動化控制產品，包含控制器、I/O模組及工業電腦，協助企業實現工業 4.0 的智慧工廠願景。",
        "footer.links": "快速連結",
        "footer.contact": "聯絡資訊",
        "footer.copyright": "© 2026 Yottacontrol. 保留所有權利。",
        "index.hero_title": "A-10x 系列 I/O 模組",
        "index.hero_subtitle": "專為嚴苛工業環境設計，具備高抗干擾與雙重隔離保護，是您分散式控制系統的最佳選擇。",
        "index.breadcrumb1": "I/O 模組",
        "index.breadcrumb2": "A-10x 系列(RS485)",
        "index.spec_title": "技術規格 Specifications",
        "index.model_title": "Model 型號總覽",
        "table.model": "型號",
        "table.di": "數位輸入 (DI)",
        "table.do": "數位輸出 (DO)",
        "table.ai": "類比輸入 (AI)",
        "table.ao": "類比輸出 (AO)",
        "table.comm": "通訊介面",
        "index.hero_badge": "新品上市",
        "index.hero_product_title": "A-10x 系列 RS-485 遠端 I/O 模組",
        "index.hero_product_desc": "專為高可靠度工業環境設計的資料採集與控制模組。支援 Modbus RTU 協定，提供多通道數位與類比 I/O，具備優異的抗干擾能力與寬溫工作範圍，是廠務自動化與設備監控的最佳選擇。",
        "index.hero_feat1": "內建看門狗計時器 (Watchdog Timer)",
        "index.hero_feat2": "支援標準 Modbus RTU 協定",
        "index.hero_feat3": "寬電壓輸入範圍 10~30VDC",
        "index.hero_feat4": "雙重隔離保護設計，提升系統穩定性",
        "index.hero_feat5": "DIN Rail 導軌安裝，施工簡便",
        "index.hero_download": "下載型錄",
        "prod.features": "產品特色",
        "prod.wiring": "腳位與配線圖",
        "prod.download": "檔案下載",
        "prod.applications": "產品應用 (Applications)",
        "prod.manual_btn": "下載使用手冊 (PDF)",
        "sidebar.title": "產品分類"
    },
    "en": {
        "title.index": "Yottacontrol | Professional Industrial Automation Manufacturer",
        "title.about": "About Us | Yottacontrol",
        "title.news": "News | Yottacontrol",
        "title.support": "Support | Yottacontrol",
        "title.products": "Products | Yottacontrol",
        "title.a10x": "A-10x Series I/O Modules | Yottacontrol",
        "title.contact": "Contact Us | Yottacontrol",
        "title.location": "Location | Yottacontrol",
        "search.placeholder": "Search...",
        "footer.about": "Yottacontrol is dedicated to providing high-quality automation control products, including controllers, I/O modules, and IPCs, helping enterprises achieve Industry 4.0.",
        "footer.links": "Quick Links",
        "footer.contact": "Contact Info",
        "footer.copyright": "© 2026 Yottacontrol. All rights reserved.",
        "index.hero_title": "A-10x Series I/O Modules",
        "index.hero_subtitle": "Designed for harsh industrial environments, featuring high anti-interference and dual isolation. The best choice for your DCS.",
        "index.breadcrumb1": "I/O Modules",
        "index.breadcrumb2": "A-10x Series (RS485)",
        "index.spec_title": "Specifications",
        "index.model_title": "Models Overview",
        "table.model": "Model",
        "table.di": "Digital Input (DI)",
        "table.do": "Digital Output (DO)",
        "table.ai": "Analog Input (AI)",
        "table.ao": "Analog Output (AO)",
        "table.comm": "Communication",
        "index.hero_badge": "New Release",
        "index.hero_product_title": "A-10x Series RS-485 Remote I/O Module",
        "index.hero_product_desc": "Data acquisition and control module designed for high-reliability industrial environments. Supports Modbus RTU protocol, provides multi-channel digital and analog I/O, features excellent anti-interference and wide temp range. Best choice for factory automation.",
        "index.hero_feat1": "Built-in Watchdog Timer",
        "index.hero_feat2": "Supports standard Modbus RTU",
        "index.hero_feat3": "Wide voltage input 10~30VDC",
        "index.hero_feat4": "Dual isolation protection",
        "index.hero_feat5": "DIN Rail mounting",
        "index.hero_download": "Download Catalog",
        "prod.features": "Features",
        "prod.wiring": "Wiring Diagram",
        "prod.download": "Downloads",
        "prod.applications": "Applications",
        "prod.manual_btn": "Download Manual (PDF)",
        "sidebar.title": "Categories"
    }
};

window.currentLang = localStorage.getItem('yotta_lang') || 'zh';

function toggleLanguage() {
    window.currentLang = window.currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('yotta_lang', window.currentLang);
    updateDOMTranslations();
    
    // Dispatch custom event so other scripts can re-render dynamic content
    window.dispatchEvent(new Event('languageChanged'));
}

function updateDOMTranslations() {
    // Translate standard elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[window.currentLang][key]) {
            el.innerText = translations[window.currentLang][key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[window.currentLang][key]) {
            el.setAttribute('placeholder', translations[window.currentLang][key]);
        }
    });

    // Update language toggle button text
    const langBtn = document.querySelector('.lang-toggle');
    if (langBtn) {
        langBtn.innerText = window.currentLang === 'zh' ? 'EN' : '繁中';
    }
}

// Run initially
document.addEventListener('DOMContentLoaded', updateDOMTranslations);
