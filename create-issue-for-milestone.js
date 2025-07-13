addNewIssueForMilestoneButton();

function addNewIssueForMilestoneButton() {
  // Locate header actions container
  const actionsContainer = document.querySelector('.milestone-buttons.detail-page-header-actions.gl-flex');
  if (!actionsContainer)
  {
    // Probably not gitlab
    return;
  }

  const newIssueWithMilestoneLink = document.querySelector('a[title="New Issue"]');
  if (!newIssueWithMilestoneLink)
  {
    // Could not find the new issue for milestone button, somehow
    return;
  }

  const link = document.createElement('a');
  link.href = newIssueWithMilestoneLink;
  link.textContent = 'New Issue';
  link.className = 'gl-button btn btn-md btn-confirm';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  actionsContainer.prepend(link);
}