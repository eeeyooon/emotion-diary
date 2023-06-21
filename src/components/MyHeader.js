const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header>
      <div class="head_btn_left">{leftChild}</div>
      <div class="head_text">{headText}</div>
      <div class="head_btn_right">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
