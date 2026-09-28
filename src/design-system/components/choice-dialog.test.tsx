import '@testing-library/jest-dom/vitest';
import type { ComponentProps } from "react";
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button';
import { ChoiceDialog, type ChoiceDialogOption } from './choice-dialog';

const options: ChoiceDialogOption[] = [
  { value: 'list', label: 'List' },
  { value: 'board', label: 'Board' },
  { value: 'grid', label: 'Grid', disabled: true },
  { value: 'table', label: 'Table' },
];

function setup(props: Partial<ComponentProps<typeof ChoiceDialog>> = {}) {
  const onConfirm = vi.fn();
  const user = userEvent.setup();
  render(<ChoiceDialog title="Choose a view" options={options} defaultValue={['list']} onConfirm={onConfirm} trigger={<Button>Change view</Button>} {...props} />);
  return { user, onConfirm, trigger: screen.getByRole('button', { name: 'Change view' }) };
}

describe('ChoiceDialog', () => {
  it('opens from the keyboard and focuses the dialog content', async () => {
    const { user, trigger } = setup();
    trigger.focus();
    await user.keyboard('{Enter}');
    const dialog = await screen.findByRole('dialog', { name: 'Choose a view' });
    expect(dialog.contains(document.activeElement)).toBe(true);
  });

  it('moves between radios with arrow keys, skips disabled options, and confirms with Enter', async () => {
    const { user, trigger, onConfirm } = setup();
    await user.click(trigger);
    const list = await screen.findByRole('radio', { name: 'List' });
    list.focus();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('radio', { name: 'Board' })).toHaveFocus();
    expect(screen.getByRole('radio', { name: 'Board' })).toBeChecked();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('radio', { name: 'Table' })).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(onConfirm).toHaveBeenCalledWith(['table']);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('toggles checkboxes with Space in multiple mode and blocks confirm below the minimum', async () => {
    const { user, trigger, onConfirm } = setup({ type: 'multiple' });
    await user.click(trigger);
    const list = await screen.findByRole('checkbox', { name: 'List' });
    list.focus();
    await user.keyboard(' ');
    expect(list).not.toBeChecked();
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeDisabled();
    await user.tab();
    expect(screen.getByRole('checkbox', { name: 'Board' })).toHaveFocus();
    await user.keyboard(' ');
    await user.click(screen.getByRole('button', { name: 'Confirm' }));
    expect(onConfirm).toHaveBeenCalledWith(['board']);
  });

  it('keeps Tab focus inside the dialog', async () => {
    const { user, trigger } = setup();
    await user.click(trigger);
    const dialog = await screen.findByRole('dialog');
    for (let i = 0; i < 8; i++) {
      await user.tab();
      expect(dialog.contains(document.activeElement)).toBe(true);
    }
  });

  it('closes on Escape without confirming and restores focus to the trigger', async () => {
    const { user, trigger, onConfirm } = setup();
    await user.click(trigger);
    await screen.findByRole('dialog');
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(onConfirm).not.toHaveBeenCalled();
    expect(trigger).toHaveFocus();
  });

  it('resets an unconfirmed selection after Escape', async () => {
    const { user, trigger } = setup();
    await user.click(trigger);
    await user.click(await screen.findByRole('radio', { name: 'Board' }));
    await user.keyboard('{Escape}');
    await user.click(trigger);
    expect(await screen.findByRole('radio', { name: 'List' })).toBeChecked();
  });

  it('Cancel closes without confirming', async () => {
    const { user, trigger, onConfirm } = setup();
    await user.click(trigger);
    await user.click(await screen.findByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(onConfirm).not.toHaveBeenCalled();
  });
});
