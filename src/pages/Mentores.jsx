import { mentores } from '@/data/mentores.json'

function Mentores() {
  return (
    <>
      <section className="flex w-full flex-wrap gap-x-6 gap-y-4 px-8 py-2">
        {mentores.map((mentor) => (
          <div
            key={mentor?.id}
            className="flex flex-col items-center rounded-xl bg-white p-4 shadow-md"
          >
            <picture className="h-36 w-36 overflow-hidden rounded-full bg-black">
              <img
                className="object-contain"
                alt="la bichota"
                src={
                  mentor?.img ??
                  'https://www.w3schools.com/howto/img_avatar.png'
                }
              />
            </picture>

            <h3 className="font-bold">{mentor?.name}</h3>
            <p className="pt-2 underline">{`#${mentor?.tag}`}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default Mentores
