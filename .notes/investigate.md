# Component Usage Investigation Report

This document summarizes the usage status of React components within the Astro project, specifically those in `src/components/pages`, `src/components/demos`, and `src/components/demo`.

## `src/components/pages`

| Component                        | Status         | Notes                                 |
| -------------------------------- | -------------- | ------------------------------------- |
| `EmotionVisualizationPage.tsx`   | **Marooned**   | Rendered by `/emotion-visualization.astro`, but this page is not linked from anywhere. |
| `EmotionProgressDemo.tsx`        | **Marooned**   | Rendered by `/demo/emotion-progress.astro`, but this page is not linked from anywhere. |
| `EmotionVisualizationDemo.tsx`   | **Marooned**   | Rendered by `/demo/emotion-visualization.astro`, but this page is not linked from anywhere. |

## `src/components/demos`

| Component                     | Status       | Notes                                      |
| ----------------------------- | ------------ | ------------------------------------------ |
| `DebounceDemoComponent.tsx`   | **Used**     | Rendered by `/debounce-demo.astro`.     |
| `RecommendationDemo.tsx`      | **Orphaned** | No usage found.                         |

### `src/components/demos/bias-detection`

| Component                    | Status   | Notes                                               |
| ---------------------------- | -------- | --------------------------------------------------- |
| `BiasCircularPacking.tsx`    | **Used** | Child of `BiasDetectionDemo.tsx`.                 |
| `BiasDetectionDemo.tsx`      | **Used** | Rendered by `/demo/enhanced-bias-detection.astro`.|
| `BiasHeatmap.tsx`            | **Used** | Child of `BiasDetectionDemo.tsx`.                 |
| `BiasSunburst.tsx`           | **Used** | Child of `BiasDetectionDemo.tsx`.                 |
| `BiasTreemap.tsx`            | **Used** | Child of `BiasDetectionDemo.tsx`.                 |
| `ConceptGlossary.tsx`        | **Used** | Child of `BiasDetectionDemo.tsx`.                 |
| `ConversationFlow.tsx`       | **Used** | Child of `BiasDetectionDemo.tsx`.                 |
| `DataTable.tsx`              | **Used** | Child of `BiasDetectionDemo.tsx`.                 |
| `DetailedBiasReport.tsx`     | **Used** | Child of `BiasDetectionDemo.tsx`.                 |
| `EmotionToneAnalysis.tsx`    | **Used** | Child of `BiasDetectionDemo.tsx`.                 |
| `InteractiveMatrix.tsx`      | **Used** | Child of `BiasDetectionDemo.tsx`.                 |
| `MitigationStrategies.tsx`   | **Used** | Child of `BiasDetectionDemo.tsx`.                 |
| `RealTimeAlerts.tsx`         | **Used** | Child of `BiasDetectionDemo.tsx`.                 |
| `SentimentAnalysis.tsx`      | **Used** | Child of `BiasDetectionDemo.tsx`.                 |
| `WordCloud.tsx`              | **Used** | Child of `BiasDetectionDemo.tsx`.                 |

## `src/components/demo`

| Component                             | Status                     | Notes                                               |
| ------------------------------------- | -------------------------- | --------------------------------------------------- |
| `ApprovalProcessWorkflowDemo.tsx`     | **Orphaned**               | No usage found.                                     |
| `CategoryBalancingDemo.tsx`           | **Orphaned (Tests Only)**  | Only used in test files.                            |
| `ChatDemo.tsx`                        | **Used**                   | Rendered by `/demo/chat.astro`.                     |
| `ClientFacingDemo.tsx`                | **Used**                   | Rendered by `/try-demo.astro`.                      |
| `ClinicalFormulationDemo.tsx`         | **Effectively Orphaned**   | Child of `ScenarioGenerationDemo.tsx`, orphaned.    |
| `ClinicalValidationDemo.tsx`          | **Orphaned**               | No usage found.                                     |
| `ConversationGenerationDemo.tsx`      | **Orphaned**               | No usage found.                                     |
| `DataIngestionDemo.tsx`               | **Orphaned (Tests Only)**  | Only used in test files.                            |
| `DemographicBalancingDisplay.tsx`     | **Used**                   | Child of `ScenarioGenerationDemo.tsx`.              |
| `EvidenceBasedVerificationDemo.tsx`   | **Orphaned**               | No usage found.                                     |
| `FHEDemo.tsx`                         | **Used**                   | Rendered by `/demo/fhe.astro`.                      |
| `FormatStandardizationDemo.tsx`       | **Effectively Orphaned**   | Child of `ConversationGenerationDemo.tsx`, orphaned.|
| `KnowledgeParsingDemo.tsx`            | **Used**                   | Rendered by `/demo/psychology-pipeline.astro`.      |
| `ListDemo.tsx`                        | **Orphaned**               | No usage found.                                     |
| `ListSections.tsx`                    | **Effectively Orphaned**   | Child of `ListDemo.tsx`, orphaned.                  |
| `PipelineOverview.tsx`                | **Used**                   | Rendered by `/demo/psychology-pipeline.astro`.      |
| `PresentingProblemVisualization.tsx`  | **Used**                   | Child of `ScenarioGenerationDemo.tsx`.              |
| `QualityAssessmentDemo.tsx`           | **Effectively Orphaned**   | Child of `ConversationGenerationDemo.tsx`, orphaned.|
| `ResultsExportDemo.tsx`               | **Orphaned (Tests Only)**  | Only used in test files.                            |
| `SafetyCheckingDemo.tsx`              | **Orphaned**               | No usage found.                                     |
| `ScenarioGenerationDemo.tsx`          | **Used**                   | Rendered by `/demo/psychology-pipeline.astro`.      |
| `SentenceReconstructionDemo.tsx`      | **Used**                   | Rendered by `/demo/sentence-reconstruction.astro`.  |
| `TherapeuticApproachShowcase.tsx`     | **Effectively Orphaned**   | Child of `ConversationGenerationDemo.tsx`, orphaned.|
| `ValidationDemo.tsx`                  | **Orphaned (Tests Only)**  | Only used in test files.                            |

## `src/components/dashboard`

This directory is empty.

## Summary & Recommendations

- **Marooned Pages**: The three pages in `src/components/pages` are fully functional but not linked from the main application. A decision should be made to either integrate them into the site navigation or remove them.
- **Orphaned Components**: Several components are not used anywhere in the production application. These should be reviewed. If they are deprecated or were for testing, they should be removed to clean up the codebase. If they are intended for future use, they should be documented as such.
- **Effectively Orphaned**: Some components are used within other components that are themselves orphaned. Their fate is tied to their parent component.
- **Test-Only Components**: Some components are only used in tests. This might be intentional for isolated testing, but it's worth confirming they are not dead code.

This investigation provides a clear overview of the component landscape and enables informed decisions about code cleanup and future development.
