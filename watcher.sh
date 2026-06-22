#!/bin/bash
echo "aMule Watcher Engine started. Listening for Chrome inputs..."
while true; do
    for f in ~/Downloads/amule_queue_*.sh; do
        if [ -f "$f" ]; then
            # Run the file natively to parse links directly to aMule
            bash "$f"
            # Delete the script file instantly to avoid file clutter
            rm -f "$f"
        fi
    done
    sleep 0.5
done
