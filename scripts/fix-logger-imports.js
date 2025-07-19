#!/usr/bin/env node

/**
 * Logger Import Standardization Script
 *
 * This script systematically fixes logger imports across the codebase to use
 * the new standardized logger system with distinct, clearly named functions.
 */

import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

// Configuration for different file types and their appropriate logger functions
const LOGGER_MAPPINGS = {
  // Clinical analysis files
  'ClinicalAnalysisHelpers.ts': {
    from: /import \{ logger \} from ['"].*utils\/logger['"];?/g,
    to: "import { getClinicalAnalysisLogger } from '@/lib/logging/standardized-logger'",
    variable: 'const logger = getClinicalAnalysisLogger("helpers")',
  },
  'ClinicalKnowledgeBase.ts': {
    from: /import \{ getLogger \} from ['"]@\/lib\/logging['"];?/g,
    to: "import { getClinicalAnalysisLogger } from '@/lib/logging/standardized-logger'",
    variable: 'const logger = getClinicalAnalysisLogger("knowledge-base")',
  },

  // Bias detection files
  'BiasDetectionEngine.ts': {
    from: /import \{ Logger \} from ['"].*utils\/logger['"];?/g,
    to: "import { getBiasDetectionLogger, Logger } from '@/lib/logging/standardized-logger'",
    variable: 'const logger = getBiasDetectionLogger("engine")',
  },
  'alerts-system.ts': {
    from: /import \{ getLogger \} from ['"].*utils\/logger['"];?/g,
    to: "import { getBiasDetectionLogger } from '@/lib/logging/standardized-logger'",
    variable: 'const logger = getBiasDetectionLogger("alerts")',
  },
  'metrics-collector.ts': {
    from: /import \{ getLogger \} from ['"].*utils\/logger['"];?/g,
    to: "import { getBiasDetectionLogger } from '@/lib/logging/standardized-logger'",
    variable: 'const logger = getBiasDetectionLogger("metrics")',
  },

  // AI service files
  'MentalLLaMAAdapter.ts': {
    from: /import \{ getLogger \} from ['"].*utils\/logger(\.js)?['"];?/g,
    to: "import { getAiServiceLogger } from '@/lib/logging/standardized-logger'",
    variable: 'const logger = getAiServiceLogger("mental-llama")',
  },
  'OpenAIModelProvider.ts': {
    from: /import \{ getLogger \} from ['"]@\/lib\/logging['"];?/g,
    to: "import { getAiServiceLogger } from '@/lib/logging/standardized-logger'",
    variable: 'const logger = getAiServiceLogger("openai")',
  },

  // API endpoint files
  'completion.ts': {
    from: /import \{ getLogger \} from ['"].*lib\/utils\/logger['"];?/g,
    to: "import { getApiEndpointLogger } from '@/lib/logging/standardized-logger'",
    variable: 'const logger = getApiEndpointLogger("ai-completion")',
  },
  'analyze.ts': {
    from: /import \{ getLogger \} from ['"].*lib\/logger\.js['"];?/g,
    to: "import { getApiEndpointLogger } from '@/lib/logging/standardized-logger'",
    variable: 'const logger = getApiEndpointLogger("mental-health-analyze")',
  },

  // Component files
  'MentalHealthChatDemo.tsx': {
    from: /import \{ getLogger \} from ['"]@\/lib\/utils\/logger['"];?/g,
    to: "import { getComponentLogger } from '@/lib/logging/standardized-logger'",
    variable: 'const logger = getComponentLogger("chat-demo")',
  },
  'AdminDashboard.test.ts': {
    from: /import \{ getLogger \} from ['"]@\/lib\/logging['"];?/g,
    to: "import { getComponentLogger } from '@/lib/logging/standardized-logger'",
    variable: 'const logger = getComponentLogger("admin-dashboard")',
  },
}

// Generic patterns for files not specifically mapped
const GENERIC_PATTERNS = [
  {
    // Files using @/lib/logging -> clinical analysis
    pattern: /import \{ getLogger \} from ['"]@\/lib\/logging['"];?/g,
    replacement:
      "import { getClinicalAnalysisLogger } from '@/lib/logging/standardized-logger'",
    variablePattern: /const logger = getLogger\([^)]*\)/g,
    variableReplacement: 'const logger = getClinicalAnalysisLogger("general")',
  },
  {
    // Files using utils/logger with .js extension -> remove .js
    pattern: /import \{ (.*) \} from ['"](.*)utils\/logger\.js['"];?/g,
    replacement:
      "import { getHipaaCompliantLogger } from '@/lib/logging/standardized-logger'",
    variablePattern: /const logger = getLogger\([^)]*\)/g,
    variableReplacement: 'const logger = getHipaaCompliantLogger("general")',
  },
  {
    // Files importing direct logger instance
    pattern: /import \{ logger \} from ['"].*utils\/logger['"];?/g,
    replacement:
      "import { getAppLogger } from '@/lib/logging/standardized-logger'",
    variablePattern: /const logger = .*logger/g,
    variableReplacement: 'const logger = getAppLogger()',
  },
]

async function findTSFiles(dir, files = []) {
  const items = await readdir(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stats = await stat(fullPath)

    if (
      stats.isDirectory() &&
      !item.startsWith('.') &&
      item !== 'node_modules'
    ) {
      await findTSFiles(fullPath, files)
    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      files.push(fullPath)
    }
  }

  return files
}

async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8')
    const fileName = path.basename(filePath)
    let updatedContent = content
    let wasModified = false

    // Check for specific file mappings first
    if (LOGGER_MAPPINGS[fileName]) {
      const mapping = LOGGER_MAPPINGS[fileName]
      if (mapping.from.test(content)) {
        updatedContent = updatedContent.replace(mapping.from, mapping.to)
        // Also replace variable declarations if specified
        if (mapping.variable) {
          updatedContent = updatedContent.replace(
            /const logger = getLogger\([^)]*\)/g,
            mapping.variable,
          )
        }
        wasModified = true
        console.log(`✅ Updated specific mapping: ${filePath}`)
      }
    } else {
      // Apply generic patterns
      for (const pattern of GENERIC_PATTERNS) {
        if (pattern.pattern.test(content)) {
          updatedContent = updatedContent.replace(
            pattern.pattern,
            pattern.replacement,
          )
          if (pattern.variablePattern) {
            updatedContent = updatedContent.replace(
              pattern.variablePattern,
              pattern.variableReplacement,
            )
          }
          wasModified = true
          console.log(`✅ Updated generic pattern: ${filePath}`)
          break // Only apply first matching pattern
        }
      }
    }

    if (wasModified) {
      await writeFile(filePath, updatedContent, 'utf8')
      return { file: filePath, status: 'updated' }
    }

    return { file: filePath, status: 'no-change' }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)
    return { file: filePath, status: 'error', error: error.message }
  }
}

async function main() {
  console.log('🚀 Starting logger import standardization...')

  const srcDir = path.join(__dirname, '..', 'src')
  const tsFiles = await findTSFiles(srcDir)

  console.log(`📁 Found ${tsFiles.length} TypeScript files`)

  const results = []

  for (const file of tsFiles) {
    const result = await processFile(file)
    results.push(result)
  }

  // Summary
  const updated = results.filter((r) => r.status === 'updated').length
  const noChange = results.filter((r) => r.status === 'no-change').length
  const errors = results.filter((r) => r.status === 'error').length

  console.log('\n📊 Summary:')
  console.log(`   ✅ Updated: ${updated}`)
  console.log(`   ⏭️  No change: ${noChange}`)
  console.log(`   ❌ Errors: ${errors}`)

  if (errors > 0) {
    console.log('\n❌ Files with errors:')
    results
      .filter((r) => r.status === 'error')
      .forEach((r) => console.log(`   - ${r.file}: ${r.error}`))
  }

  if (updated > 0) {
    console.log('\n✅ Updated files:')
    results
      .filter((r) => r.status === 'updated')
      .forEach((r) => console.log(`   - ${r.file}`))
  }

  console.log('\n🎉 Logger import standardization complete!')
}

// Run the script if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('💥 Script failed:', error)
    process.exit(1)
  })
}
