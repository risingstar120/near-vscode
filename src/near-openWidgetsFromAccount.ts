import * as vscode from 'vscode';
import { NEAR_FS_SCHEME } from "./util";

export const openWidgetsFromAccount = async (context: vscode.ExtensionContext) => {
    const accountId = await vscode.window.showInputBox({ placeHolder: 'mainnet account id' });
    if (accountId) {
      vscode.workspace.updateWorkspaceFolders(0, 0, {uri: vscode.Uri.parse(`${NEAR_FS_SCHEME}:/${accountId}/`), name: `⛓ mainnet:// ${accountId}`});
      vscode.window.showInformationMessage(`Added to workspace: ${accountId}.`);
    } else {
      vscode.window.showErrorMessage('Invalid Account ID');
    }
  };
