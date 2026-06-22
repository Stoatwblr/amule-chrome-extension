// --- 1. CORE FUNCTION: FIX INDIVIDUAL CLICKABLE LINKS ---
document.addEventListener('click', function(e) {
    let anchor = e.target.closest('a');
    if (anchor && anchor.getAttribute('href') && anchor.getAttribute('href').startsWith('ed2k:')) {
        e.preventDefault();
        e.stopPropagation();
        
        // Trigger a clean, prompt-free system file stream download
        triggerScriptDownload([anchor.getAttribute('href')]);
    }
}, true);

// --- 2. MULTI-SELECT FEATURE: INJECT CHECKBOXES AND FLOATING PANEL ---
function injectMultiSelectGUI() {
    let links = document.querySelectorAll('a[href^="ed2k:"]');
    if (links.length === 0) return;

    // Create the floating control panel container
    let panel = document.createElement('div');
    panel.id = 'amule-management-panel';
    panel.style.cssText = 'position:fixed; bottom:20px; right:20px; z-index:2147483647; padding:15px; background:#2c3e50; color:#fff; border-radius:8px; box-shadow:0 4px 15px rgba(0,0,0,0.4); font-family:sans-serif; min-width:220px;';
    
    panel.innerHTML = `
        <h4 style="margin:0 0 10px 0; font-size:14px; border-bottom:1px solid #7f8c8d; padding-bottom:5px;">aMule Bulk Manager</h4>
        <div style="margin-bottom:10px;">
            <button id="amule-select-all" style="padding:5px 10px; background:#34495e; color:#fff; border:none; border-radius:4px; cursor:pointer; font-size:12px; margin-right:5px;">Select All</button>
            <button id="amule-send-bulk" style="padding:5px 10px; background:#27ae60; color:#fff; border:none; border-radius:4px; cursor:pointer; font-size:12px; font-weight:bold;">Queue Selected</button>
        </div>
        <div id="amule-status-text" style="font-size:11px; color:#bdc3c7;">Found ${links.length} ed2k links on page.</div>
    `;
    document.body.appendChild(panel);

    // Inject checkboxes next to each real link on the website
    links.forEach((anchor, index) => {
        // Prevent duplicate injections
        if (anchor.previousSibling && anchor.previousSibling.className === 'amule-select-checkbox') return;

        let cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.className = 'amule-select-checkbox';
        cb.value = anchor.getAttribute('href');
        cb.style.cssText = 'margin-right:6px; transform:scale(1.1); vertical-align:middle; cursor:pointer;';
        anchor.parentNode.insertBefore(cb, anchor);
    });

    // Event Listener: Toggle Select All / Deselect All
    document.getElementById('amule-select-all').addEventListener('click', function() {
        let cbs = document.querySelectorAll('.amule-select-checkbox');
        let allChecked = Array.from(cbs).every(cb => cb.checked);
        cbs.forEach(cb => cb.checked = !allChecked);
        this.innerText = allChecked ? "Select All" : "Deselect All";
    });

    // Event Listener: Process Bulk Queue
    document.getElementById('amule-send-bulk').addEventListener('click', function() {
        let checkedBoxes = document.querySelectorAll('.amule-select-checkbox:checked');
        if (checkedBoxes.length === 0) {
            alert("Please mark at least one download checkbox first!");
            return;
        }

        let urlsToQueue = Array.from(checkedBoxes).map(cb => cb.value);
        triggerScriptDownload(urlsToQueue);
        
        // Reset checkboxes after queuing
        checkedBoxes.forEach(cb => cb.checked = false);
        document.getElementById('amule-select-all').innerText = "Select All";
    });
}

// --- 3. THE BACKEND ENGINE: TRIGGER PROMPT-FREE SYSTEM SCRIPT ---
function triggerScriptDownload(urlsArray) {
    // Generate an clean automation shell script file content string
    let scriptLines = "#!/bin/bash\n";
    urlsArray.forEach(url => {
        scriptLines += `/usr/bin/ed2k "${url}"\n`;
    });

    // Convert the text into an immediate native binary executable download stream
    let blob = new Blob([scriptLines], { type: 'application/x-sh' });
    let downloader = document.createElement('a');
    downloader.href = URL.createObjectURL(blob);
    
    // Generate a unique name for each batch download to dodge Chrome overwrite alerts
    downloader.download = `amule_queue_${Date.now()}.sh`;
    
    document.body.appendChild(downloader);
    downloader.click();
    document.body.removeChild(downloader);
}

// Initialize the visual panel interface engine
injectMultiSelectGUI();
