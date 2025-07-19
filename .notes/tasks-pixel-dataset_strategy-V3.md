# Notes

- Unit tests should typically be placed alongside the code files they are testing (e.g., `MyComponent.tsx` and `MyComponent.test.tsx` in the same directory).
- Use `npx vitest [optional/path/to/test/file]` or `uv run pytest [optional/path/to/test/file]` to run tests. Running without a path executes all tests found by the Vitest configuration.

## Tasks

- [ ] 1.0 Acquire and Validate Datasets
  - [ ] 1.1 Download all external datasets from HuggingFace and other sources.
  - [ ] 1.2 Validate the integrity and completeness of each dataset.
  - [ ] 1.3 Load and verify existing local datasets (e.g., merged mental health, edge cases).
  - [ ] 1.4 Document dataset sources, licenses, and usage constraints.

- [ ] 2.0 Process and Transcribe Voice Data
  - [ ] 2.1 Extract audio from all YouTube playlists using yt-dlp.
  - [ ] 2.2 Transcribe audio using the Whisper pipeline.
  - [-] 2.3 Convert transcriptions to conversational format.
      - User confirmed chunking and question style: 2–3 segments per turn, host question generated for each, guest response is chunk text.
      - Next: Implement script to process all transcripts, outputting dialog turns to a new JSONL file.
      - Risks: Chunking may not align with topic boundaries; host questions may become repetitive; output structure must be consistent.
      - Log: User validated sample; proceeding with full transformation.
  - [ ] 2.4 Filter and quality-check voice data for authenticity and consistency.
  - [ ] 2.5 Organize processed voice data for integration.

- [ ] 3.0 Standardize and Categorize All Data Sources
  - [ ] 3.1 Convert all datasets to a unified standard format.
  - [ ] 3.2 Categorize data into psychology knowledge, voice training, mental health, reasoning, and personality balancing.
  - [ ] 3.3 Process psychology knowledge base into conversational training data.
  - [ ] 3.4 Ensure metadata and source tracking for all entries.

- [ ] 4.0 Assess and Filter Data Quality
  - [ ] 4.1 Implement quality assessment metrics (coherence, authenticity, therapeutic accuracy, language quality).
  - [ ] 4.2 Filter out low-quality or inconsistent data.
  - [ ] 4.3 Score and annotate data with quality metrics.
  - [ ] 4.4 Review filtered data samples for manual validation.

- [ ] 5.0 Integrate, Balance, and Prepare Final Training Dataset
  - [ ] 5.1 Merge all processed and filtered datasets.
  - [ ] 5.2 Apply target balancing ratios for each category.
  - [ ] 5.3 Augment data where necessary to meet target sizes.
  - [ ] 5.4 Shuffle and split data into training and validation sets.
  - [ ] 5.5 Document final dataset composition and statistics.

- [ ] 6.0 Implement Quality Validation and Monitoring Frameworks
  - [ ] 6.1 Develop comprehensive quality validation framework.
  - [ ] 6.2 Run multi-dimensional quality checks (therapeutic, emotional, coherence, personality).
  - [ ] 6.3 Set up continuous quality monitoring during training.
  - [ ] 6.4 Generate quality reports and recommendations.
  - [ ] 6.5 Prepare for expert review and feedback integration.

### Relevant Files

- ai/merged_mental_health_dataset.jsonl - Core consolidated mental health dataset.
- ai/edge_case_pipeline_standalone/ - Pipeline for generating and processing edge case scenarios.
- ai/1.PsychologyTest/knowledge/ - Psychology knowledge base for extraction and conversion.
- ai/youtube-transcription-pipeline/faster_pipeline.sh - Script for transcribing YouTube playlists.
- ai/voice_training/ - Directory for processed and filtered voice training data.
- ai/PixelDatasetLoader.py - Loader and orchestrator for dataset acquisition and integration.
- ai/DataStandardizer.py - Handles standardization of all datasets.
- ai/QualityAssessment.py - Module for assessing and filtering data quality.
- ai/DatasetBalancer.py - Module for balancing datasets according to target ratios.
- ai/VoiceTrainingOptimizer.py - Optimizes voice data for personality consistency.
- ai/PsychologyKnowledgeProcessor.py - Converts psychology knowledge to conversational format.
- ai/DatasetQualityFramework.py - Implements comprehensive quality validation.
- ai/ContinuousQualityMonitor.py - Monitors data quality during training.
- tests/ai/test_dataset_loader.py - Unit tests for dataset loader and integration.
- tests/ai/test_data_standardizer.py - Unit tests for data standardization.
- tests/ai/test_quality_assessment.py - Unit tests for quality assessment and filtering.
- tests/ai/test_dataset_balancer.py - Unit tests for dataset balancing.
- tests/ai/test_voice_training_optimizer.py - Unit tests for voice training optimization.
- tests/ai/test_psychology_knowledge_processor.py - Unit tests for psychology knowledge processing.
- tests/ai/test_dataset_quality_framework.py - Unit tests for quality validation framework.