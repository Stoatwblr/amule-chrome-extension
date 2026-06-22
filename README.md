# amule-chrome-extension
A chrome extension to handle ed2k links - for v149.0.7827.155 and later

AI Disclosure: This was written entirely by Gemini with human guidance

======================================================================
# aMule Link Integration Tool

A modern Google Chrome extension designed for Linux users to restore seamless `ed2k://` link handling. It fixes Chrome's security block (`about:blank#blocked`) on custom protocols and adds built-in multi-select bulk queuing capabilities.

## Features
- **Clickable Links**: Restores single-click functionality for individual `ed2k://` links.
- **Bulk Manager**: Injects checkboxes next to links along with a floating dashboard to select and queue dozens of links at once.
- **Pure JavaScript**: Built on the modern Manifest V3 API framework with zero external framework dependencies or slow build steps.

## Installation

### 1. Load the Extension into Chrome
1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** using the toggle switch in the top-right corner.
3. Click the **Load unpacked** button in the top-left corner.
4. Select this `amule-chrome-extension` directory.

### 2. Configure Chrome Downloads
Because Chrome security engines block direct protocol passing for non-standard formats, this extension channels links via a secure, clean terminal stream.
1. Go to Chrome **Settings** -> **Downloads**.
2. **Turn off** the setting: *"Ask where to save each file before downloading"*.

### 3. Run the Terminal Watcher
Open your Linux terminal and run the background watcher script. This script processes your links instantly and keeps your download folder entirely clean:
```bash
chmod +x watcher.sh
./watcher.sh
```

## How It Works
1. When you click a link or trigger a bulk download, the extension packages the raw `ed2k` text arrays into a temporary shell file named `amule_queue_[timestamp].sh`.
2. Your local `watcher.sh` loop notices the file, feeds the lines straight into your native `/usr/bin/ed2k` client tool, and deletes the script instantly.

## License
This project is licensed under the GNU Lesser General Public License v3.0 (LGPL-3.0). See the [LICENSE](LICENSE) file for details.

