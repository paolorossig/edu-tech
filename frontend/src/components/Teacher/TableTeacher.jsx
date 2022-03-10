function tableTeacher({ element }) {
  const { curso, matriculados, enlinea, conectadoshoy, url } = element

  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={url} alt=""></img>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{curso}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <div className="text-sm text-gray-900">{matriculados}</div>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
          {enlinea}
        </span>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
        {conectadoshoy}
      </td>
    </tr>
  )
}
export default tableTeacher
