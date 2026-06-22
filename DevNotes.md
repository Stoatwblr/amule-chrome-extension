
**Subject:** Proposed Fix for Chrome Linux ed2k Link Handling Engine (Manifest V3)

Hi Team,

I have put together a working repository that addresses the modern Chromium security engine block (about:blank\#blocked) on ed2k:// links under Linux.

Since recent browser updates aggressively drop non-standard link protocols containing pipe formatting (|), standard protocol handlers no longer work out of the box.

## **The Solution Architecture:**

1. **Event Interception**: A lightweight Manifest V3 content script intercepts the link click events and pulls the raw URL string before Chrome's rendering engine can corrupt or block the navigation target.  
2. **Bulk Selection Layout**: The script automatically injects clean selection checkboxes next to all page items alongside a native multi-select control panel dashboard.  
3. **Local Stream Pipeline**: Links are converted into individual shell script packages and executed locally via a lightweight automation loop utility (watcher.sh). This passes strings cleanly into the native /usr/bin/ed2k binary, bypassing browser engine restrictions entirely.

The repository includes a complete README.md, standard **LGPL v3** licensing documentation, and pre-compiled .crx release configurations ready for review.


