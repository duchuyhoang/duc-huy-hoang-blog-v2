type Tree<T> = {
  data: T;
  childrens?: Array<Tree<T>>;
};
