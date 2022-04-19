function ContentPageLayout({ children }) {
  return <div className="flex h-full flex-col">{children}</div>
}

function Title({ children }) {
  return <h1 className="mb-4">{children}</h1>
}

function Paper({ children }) {
  return (
    //overflow-hidden
    <section className="flex flex-auto flex-col  rounded-t-3xl bg-white p-4 md:rounded-t-[50px] md:px-[50px] md:pt-[50px]">
      {children}
    </section>
  )
}

ContentPageLayout.Title = Title
ContentPageLayout.Paper = Paper

export default ContentPageLayout
