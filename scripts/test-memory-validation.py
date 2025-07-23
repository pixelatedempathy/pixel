#!/usr/bin/env python3
"""Test script to validate memory sync content validation"""

import sys
from pathlib import Path

# Add the scripts directory to the path
script_dir = Path(__file__).parent
sys.path.insert(0, str(script_dir))

# Import from memory-sync.py (handle hyphen in filename)
import importlib.util

spec = importlib.util.spec_from_file_location("memory_sync", script_dir / "memory-sync.py")
if spec is None or spec.loader is None:
    raise ImportError("Could not load memory-sync.py module")
memory_sync = importlib.util.module_from_spec(spec)
spec.loader.exec_module(memory_sync)

# Extract classes from the module
MemoryService = memory_sync.MemoryService
MemoryRecord = memory_sync.MemoryRecord

import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)


def test_memory_validation():
    """Test memory content validation"""
    service = MemoryService()

    # Test cases with different types of content
    test_memories = [
        # Valid memory
        MemoryRecord(
            id="test-1",
            content="This is a valid memory about a useful programming concept",
            metadata={"source": "test"},
            created_at="2024-01-01T00:00:00Z",
            source="test",
        ),
        # HTML content (should be filtered)
        MemoryRecord(
            id="test-2",
            content="""<!DOCTYPE html>
<html>
<head><title>Error Page</title></head>
<body>Page not found</body>
</html>""",
            metadata={"source": "test"},
            created_at="2024-01-01T00:00:00Z",
            source="test",
        ),
        # Ad-block content (should be filtered)
        MemoryRecord(
            id="test-3",
            content='<script data-adblockkey="MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBA">window.park = true;</script>',
            metadata={"source": "test"},
            created_at="2024-01-01T00:00:00Z",
            source="test",
        ),
        # Short content (should be filtered)
        MemoryRecord(
            id="test-4",
            content="hi",
            metadata={"source": "test"},
            created_at="2024-01-01T00:00:00Z",
            source="test",
        ),
        # Another valid memory
        MemoryRecord(
            id="test-5",
            content="Remember to use async/await for better performance in Python web applications",
            metadata={"source": "test"},
            created_at="2024-01-01T00:00:00Z",
            source="test",
        ),
    ]

    # Test validation on each memory
    validation_results = [
        (memory, service._validate_memory_content(memory)) for memory in test_memories
    ]

    # Print results
    [
        f"{'✅ VALID' if is_valid else '❌ INVALID'}: {memory.content[:50]}..."
        for memory, is_valid in validation_results
    ]

    len([result for result in validation_results if result[1]])

    # Test backup saving (should only save valid memories)
    try:
        test_backup_saving(service, test_memories)
    except Exception:
        pass


def test_backup_saving(service, test_memories):
    backup_path = service.save_backup(test_memories, "test_validation")

    # Read back the backup to verify only valid memories were saved
    import json

    with open(backup_path) as f:
        saved_data = json.load(f)

    [f"  {i+1}: {memory['content'][:50]}..." for i, memory in enumerate(saved_data)]


if __name__ == "__main__":
    test_memory_validation()
