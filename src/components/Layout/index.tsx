interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => (
  <div>{children}</div>
)

export default Layout
