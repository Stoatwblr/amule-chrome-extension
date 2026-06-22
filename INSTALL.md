---

**Release v1.0.0: Initial Release 🚀**

This is the initial production release of the **aMule Link Integration Tool** for Google Chrome on Linux. This project restores seamless handling of ed2k:// links, completely bypassing the modern Chromium security engine blocks (about:blank\#blocked) while adding robust multi-select queuing support.

## **🛠️ Installation & Setup**

## **1\. Install the Extension (.crx)**

1. Download the attached **amule-chrome-extension.crx** binary from the assets section below.  
2. Open Google Chrome and navigate to chrome://extensions/.  
3. Toggle **Developer mode** (top-right corner) to **On**.  
4. Drag and drop the downloaded amule-chrome-extension.crx file directly onto the extensions page.  
5. Click **Add Extension** when prompted.

## **2\. Configure Chrome Downloads**

Because Chrome security engines block direct protocol passing for non-standard formats, this extension channels links via a secure local stream.

1. Go to Chrome **Settings** \-\> **Downloads**.  
2. **Turn off** the setting: *"Ask where to save each file before downloading"*.

## **3\. Run the Automation Loop**

Open your Linux terminal, navigate to your script directory, and launch the background processing engine:

`chmod +x watcher.sh`  
`./watcher.sh`

*Keep this script running in the background to automatically process and clear link arrays instantly.*

## ---

**🤖 AI Collaboration Attribution**

This project was proudly co-developed and engineered in collaboration with **Google Gemini (AI)**.

## **Contributions:**

* **Protocol Interception**: Designed the architecture to bypass strict Chromium scheme checking by converting malformed link blocks into standard OS-level streams.  
* **Manifest V3 Porting**: Formulated code to transition away from deprecated background pages and insecure clipboard scripts, ensuring long-term compatibility with modern browser engines.  
* **Automation Engineering**: Scripted the zero-click background watcher loop (watcher.sh) to eliminate friction for users managing high-volume download queues.

Special thanks to the aMule developer community for driving the recovery and maintenance of open-source p2p tools\!

