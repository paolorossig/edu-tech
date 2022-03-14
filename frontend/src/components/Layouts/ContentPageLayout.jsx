function ContentPageLayout({ children }) {
  return <div className="flex h-full flex-col">{children}</div>
}

function Title({ children }) {
  return <h1 className="my-4">{children}</h1>
}

function Paper({ children }) {
  return (
    <section className="flex-auto overflow-hidden rounded-t-3xl bg-white p-4 md:rounded-t-[50px] md:p-[50px]">
      {children}
    </section>
  )
}

ContentPageLayout.Title = Title
ContentPageLayout.Paper = Paper

export default ContentPageLayout
