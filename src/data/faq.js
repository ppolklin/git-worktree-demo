export const faqData = [
  {
    question: "Git Worktree 是什麼？",
    answer: "Git Worktree 允許你在同一個 Repository 中同時切換多個分支並在不同的目錄下工作。這對於需要同時修復 Bug 和開發新功能的情況非常有用。"
  },
  {
    question: "如何建立一個新的 Worktree？",
    answer: "你可以使用命令 `git worktree add <path> <branch>` 來建立。這會在指定的路徑建立一個新的工作目錄，並與指定的位分支連結。"
  },
  {
    question: "Worktree 適合在什麼場景使用？",
    answer: "當你需要頻繁切換分支、比較不同分支的程式碼，或是需要在多個分支上並行執行不同的測試或部署腳本時，Worktree 是最佳選擇。"
  },
  {
    question: "使用 Worktree 有什麼注意事項？",
    answer: "在同一個 Repo 中，同一個分支不能同時被多個 Worktree 簽出（Checkout）。此外，刪除 Worktree 時建議使用 `git worktree remove` 以確保正確清理。"
  }
];
