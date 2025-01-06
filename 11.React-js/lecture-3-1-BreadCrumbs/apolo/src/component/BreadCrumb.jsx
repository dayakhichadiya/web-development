import React from 'react'
import { useLocation, Link } from 'react-router-dom';

const BreadCrumb = () => {

    const location = useLocation()
    console.log(location);

    let pageLink = ''

    const pagePath = location.pathname
    console.log(pagePath);

    const pathSplit = pagePath.split('/')
    console.log(pathSplit);

    const filterPath = pathSplit.filter((link) => link !== '')
    console.log(filterPath);

    const createLink = filterPath.map((link,index) => {

        pageLink += `/${link}`


        return (
            <div>
                <Link to={pageLink}>
                {index !== 0? <span>/</span> : <></>}
                {link}
                </Link>

            </div>
        )
    })

    console.log(createLink);
    console.log("PageLink", pageLink);

    return (
        <div className='flex'>
            {
                createLink
            }
        </div>
    )
}

export default BreadCrumb


