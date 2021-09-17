import './CV.css'
import Profile from './profile.jpeg'
const CV = () => {
  return (
    <div id="cv" className="text-gray-800 md:py-16">
      <div className="resume p-5 md:p-12 h-auto bg-white mx-auto">
        <div className="md:grid md:grid-cols-12 md:gap-4">
          <div className="md:col-span-7 md:flex">
            <img src={Profile} alt="profile_pic" className="profile" />
            <div className="md:ml-6 md:my-2">
              <div className="text-blue-500 font-semibold">Fullstack Developer</div>
              <h1 className="text-3xl font-bold mt-2">Rumeng CAI</h1>
              <div className="mt-5">
                <div>
                  <div className="flex items-center">
                    <i className="lni lni-envelope text-blue-500 text-lg mr-2 font-bold"></i>
                    <a href="mailto:cairumeng@gmail.com" className="text-gray-500">
                      cairumeng@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center">
                    <i className="lni lni-map-marker text-blue-500 text-lg mr-2 font-bold"></i>
                    <span className="text-gray-500">Paris</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 flex flex-col justify-end py-3">
            <div className="flex items-center">
              <i className="lni lni-github text-blue-500 text-lg mr-2 font-bold"></i>
              <a href="https://github.com/cairumeng" className="text-gray-500">
                https://github.com/cairumeng
              </a>
            </div>

            <div className="flex items-center">
              <i className="lni lni-phone text-blue-500 text-lg mr-2 font-bold"></i>
              <a href="tel:+33666876770" className="text-gray-500">
                (+33) 06 66 87 67 70
              </a>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-12 md:gap-4 mt-8">
          <div className="md:col-span-7">
            <h2 className="text-lg font-bold">Présentation</h2>
            <p className="text-gray-500">
              A travers deux expériences entrepreneuriales liées au web, je me suis décidée à
              m'aventurer dans le métier de développeuse web et ai réalisé en autodidacte des
              projets personnels de A à Z.
            </p>
          </div>

          <div className="col-span-5 mt-5 md:mt-0">
            <h2 className="text-lg font-bold">Skills</h2>
            <ul>
              <li>
                <i className="lni lni-friendly text-blue-500 mr-2 font-bold"></i>Javascript, React,
                ES6
              </li>
              <li>
                <i className="lni lni-friendly text-blue-500 mr-2 font-bold"></i>PHP, Laravel
              </li>
              <li>
                <i className="lni lni-friendly text-blue-500 mr-2 font-bold"></i>SQL, MySQL
              </li>
              <li>
                <i className="lni lni-friendly text-blue-500 mr-2 font-bold"></i>SASS, Tailwindcss,
                Bootstrap
              </li>
              <li>
                <i className="lni lni-friendly text-blue-500 mr-2 font-bold"></i>Git, Github
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold">Projets personnels</h2>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2 text-blue-500">2021</div>
            <div className="col-span-10">
              <div className="font-semibold">livrensemble.com</div>
              <div className="text-gray-500">
                Un plateforme site pour regrouper des commandes et une livraison ensemble.
                <ul className="mt-1">
                  <li>
                    <i className="lni lni-pointer-right text-blue-500 mr-2 font-bold"></i> la
                    conception de base de données
                  </li>
                  <li>
                    <i className="lni lni-pointer-right text-blue-500 mr-2 font-bold"></i> le
                    workflow du panier : synchronisation cross-device{' '}
                  </li>
                  <li>
                    <i className="lni lni-pointer-right text-blue-500 mr-2 font-bold"></i>{' '}
                    l'authentification avec JWT
                  </li>
                  <li>
                    <i className="lni lni-pointer-right text-blue-500 mr-2 font-bold"></i> le
                    déploiement sur AWS EC2 avec nginx
                  </li>
                </ul>
                <div className="mt-1">
                  <label className="border px-1 rounded">Laravel</label>
                  <label className="border px-1 rounded">React(context, hook)</label>
                  <label className="border px-1 rounded">React Router</label>
                  <label className="border px-1 rounded">React Query</label>
                  <label className="border px-1 rounded">ES6</label>
                  <label className="border px-1 rounded">Git</label>
                  <label className="border px-1 rounded">Tailwindcss</label>
                  <label className="border px-1 rounded">Dayjs</label>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-2 text-blue-500">2019-2020</div>
            <div className="col-span-10">
              <div className="font-semibold">wukongsongcai.com</div>
              <div className="text-gray-500">
                Un supermaché en ligne
                <ul>
                  <li>Développement backend, la conception du site.</li>
                  <li>
                    <strong>Stack technique</strong>: Laravel, vuejs, ES6, git, tailwindcss
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold">Expériences</h2>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2 text-blue-500">2019 - 2021</div>
            <div className="col-span-10">
              <div className="font-semibold">Co-foundatrice | E-supermarché: wukongsongcai.com</div>
              <div className="text-gray-500">
                un supermarché en ligne visant à la clientèle asiatique dans la région parisienne
                avec un chiffre d'affaires d'environ 600k par an.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-2 text-blue-500">2021</div>
            <div className="col-span-10">
              <div className="font-semibold">Foundatrice | E-learning: alphabeille</div>
              <div className="text-gray-500">
                Site d’apprentissage du français via les vidéos youtube avec une plate-forme de
                traduction et des propositions cours particuliers ou en groupe en ligne.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold">Formations</h2>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2 text-blue-500">2020-2021</div>
            <div className="col-span-10">
              <div className="font-semibold">World Wide Web</div>

              <div className="text-gray-500">Self-education, Fullstack developer</div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-2 text-blue-500">2015-2017</div>
            <div className="col-span-10">
              <div className="font-semibold">Université Sorbonne Nouvelle - Paris 3</div>

              <div className="text-gray-500">
                Master - Langues Étrangères Appliquées en traduction Juridique & Financière
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pb-8 md:pb-8">
          <h2 className="text-lg font-bold">Langues</h2>
          <div className="text-gray-500">Français, English, 中文</div>
        </div>
      </div>
    </div>
  )
}
export default CV
