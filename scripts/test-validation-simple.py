#!/usr/bin/env python3
"""Simple test for memory content validation"""

import json
import os
import sys
from pathlib import Path

# Add scripts directory to path
sys.path.insert(0, str(Path(__file__).parent))
from backup_validator import BackupContentValidator


def validate_memory_content(content: str) -> bool:
    """Validate memory content for integrity and authenticity"""
    validator = BackupContentValidator()
    # Create a minimal memory structure for validation
    memory_data = {"content": content}
    is_valid, errors = validator.validate_memory_structure(memory_data)

    if not is_valid:
        for error in errors:
            pass")
    else:
        pass")

    return is_valid


def test_valid_programming_memory():
    """Test validation with valid programming memory"""
    content = "Valid memory about programming"
    result = validate_memory_content(content)
    assert result, f"Expected True, got {result}"


def test_valid_async_memory():
    """Test validation with valid async programming note"""
    content = "This is a useful note about Python async programming"
    result = validate_memory_content(content)
    assert result, f"Expected True, got {result}"


def test_empty_content():
    """Test validation with empty content"""
    content = ""
    result = validate_memory_content(content)
    assert not result, f"Expected False, got {result}"


def test_short_content():
    """Test validation with too short content"""
    content = "hi"
    result = validate_memory_content(content)
    assert not result, f"Expected False, got {result}"


def test_html_content():
    """Test validation with HTML content"""
    content = "<!DOCTYPE html><html><head></head><body>Error</body></html>"
    result = validate_memory_content(content)
    assert not result, f"Expected False, got {result}"


def test_adblock_content():
    """Test validation with ad-block content"""
    content = '<script data-adblockkey="test">window.park = true;</script>'
    result = validate_memory_content(content)
    assert not result, f"Expected False, got {result}"


def test_error_page_content():
    """Test validation with error page content"""
    content = "404 not found - page does not exist"
    result = validate_memory_content(content)
    assert not result, f"Expected False, got {result}"


def test_parking_page_content():
    """Test validation with parking page content"""
    content = "This domain is parked for sale"
    result = validate_memory_content(content)
    assert not result, f"Expected False, got {result}"


def test_placeholder_content():
    """Test validation with placeholder content"""
    content = "Lorem ipsum dolor sit amet"
    result = validate_memory_content(content)
    assert not result, f"Expected False, got {result}"


def test_valid_performance_memory():
    """Test validation with valid performance memory"""
    content = "Remember to use async/await for better performance"
    result = validate_memory_content(content)
    assert result, f"Expected True, got {result}"


def test_corrupted_backup_file():
    """Test validation with actual corrupted backup file"""
    backup_file = Path("/home/vivi/pixel/memory_backups/combined_memories_20250707_204810.json")

    try:
        validate_corrupted_backup_file(backup_file)
    except FileNotFoundError:
        passst")
    except Exception as e:
        passe}")


def validate_corrupted_backup_file(backup_file):
    with open(backup_file) as f:
        data = json.load(f)

    corrupted_content = (
        data[0].get("content", "") if isinstance(data, list) and len(data) > 0 else ""
    )
    validate_memory_content(corrupted_content)


def run_all_tests():
    """Run all validation tests"""

    test_functions = [
        test_valid_programming_memory,
        test_valid_async_memory,
        test_empty_content,
        test_short_content,
        test_html_content,
        test_adblock_content,
        test_error_page_content,
        test_parking_page_content,
        test_placeholder_content,
        test_valid_performance_memory,
        test_corrupted_backup_file,
    ]

    passed_tests = 0
    total_tests = len(test_functions)

    # Run all test functions except the last one (corrupted backup test)
    for test_func in test_functions[:-1]:
        try:
            test_func()
            passed_tests += 1
        except Exception as e:
            pass")

    if backup_path := os.environ.get("TEST_CORRUPTED_BACKUP_FILE"):
        try:
            test_functions[-1]()  # test_corrupted_backup_file
            passed_tests += 1
        except Exception as e:
            pass")
    else:
        total_tests -= 1  # Adjust total count since we're skipping this test



if __name__ == "__main__":
    run_all_tests()
