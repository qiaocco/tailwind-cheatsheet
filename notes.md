# 开发笔记

## 表格横向滚动实现

当表格内容过长时，需要添加横向滚动条：

```tsx
<div className="max-h-80 overflow-auto scrollbar">
  <table className="w-full min-w-max">
    {/* ... */}
  </table>
</div>
```

### 关键属性说明

- **`overflow-auto`**: 允许容器在内容溢出时自动显示滚动条（支持横向和纵向）
  - 如果只用 `overflow-y-auto` 则只有纵向滚动
  - `overflow-auto` 会在两个方向都按需显示滚动条

- **`min-w-max`**: 设置表格最小宽度为内容的最大宽度
  - 防止表格被容器压缩
  - 确保表格内容不换行，超出容器时触发横向滚动
  - 等同于 CSS 的 `min-width: max-content`

### 效果
整个表格作为一个整体可以左右拖拽滚动，每一行保持完整不换行。
