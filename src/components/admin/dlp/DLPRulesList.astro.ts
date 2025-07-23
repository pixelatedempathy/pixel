// Function to handle rule updates
function handleRuleUpdated(event: CustomEvent) {
  const { id, name, isActive } = event.detail
  console.log(
    `Rule updated: ${name} (${id}) is now ${isActive ? 'active' : 'inactive'}`,
  )
}

// Function to handle rule deletions
function handleRuleDeleted(event: CustomEvent) {
  const { id, name } = event.detail
  console.log(`Rule deleted: ${name} (${id})`)

  // Check if there are no more rules
  const rulesList = document.querySelector('.rules-list .space-y-4')
  if (rulesList && rulesList.children.length === 0) {
    // Show the "No rules" message
    const noRulesCard = document.createElement('div')
    noRulesCard.className = 'card'
    noRulesCard.innerHTML = `
      <div class="py-8">
        <p class="text-center text-muted-foreground">
          No DLP rules found. Add a rule to get started.
        </p>
      </div>
    `
    rulesList.parentNode?.replaceChild(noRulesCard, rulesList)
  }
}

// Set up event listeners when the script loads
const handleRuleUpdatedListener = (e: Event) =>
  handleRuleUpdated(e as CustomEvent)
const handleRuleDeletedListener = (e: Event) =>
  handleRuleDeleted(e as CustomEvent)

document.addEventListener('dlp:rule-updated', handleRuleUpdatedListener)
document.addEventListener('dlp:rule-deleted', handleRuleDeletedListener)

// Clean up event listeners when the component unmounts
window.addEventListener('unload', () => {
  document.removeEventListener('dlp:rule-updated', handleRuleUpdatedListener)
  document.removeEventListener('dlp:rule-deleted', handleRuleDeletedListener)
})
