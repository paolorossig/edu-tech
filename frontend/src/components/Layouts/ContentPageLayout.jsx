function ContentPageLayout({ children }) {
  return <div className="flex h-full flex-col">{children}</div>
}

function Title({ children }) {
  return <h1 className="my-4">{children}</h1>
}

function Paper({ children }) {
  return (
    <section className="flex-auto overflow-hidden rounded-t-[50px] bg-white p-8 md:p-[50px]">
      {children}
    </section>
  )
}

ContentPageLayout.Title = Title
ContentPageLayout.Paper = Paper

export default ContentPageLayout
