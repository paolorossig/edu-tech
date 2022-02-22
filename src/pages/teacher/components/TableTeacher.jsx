function tableTeacher({ element }) {
  const { curso, matriculados, enlinea, conectadoshoy, url } = element
  return (
    
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src={url} alt=""></img>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{curso}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{matriculados}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {enlinea}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {conectadoshoy}
        </td>
      </tr>
    
  )
}
export default tableTeacher
