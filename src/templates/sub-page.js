import React from 'react'
// import PropTypes from 'prop-types'
import PageHeader from '../components/PageHeader'

export const SubPageTemplate = ({
    title,
    coverImage,
    copy
}) => (
        <main>
            <PageHeader title={title} coverImage={coverImage}/>
            <section class="letter">
                <div class="copy">
                    {copy}
                </div>
            </section>
        </main>
    )

// SubPageTemplate.propTypes = {
//     title: PropTypes.string,
//     coverImage: PropTypes.string,
//     copy: PropTypes.object
// }

const SubPage = ({ data }) => {
    const { markdownRemark: queryData } = data

    return (
        <SubPageTemplate
            title={queryData.frontmatter.title}
            coverImage={queryData.frontmatter.coverImage}
            copy={queryData.html}
        />
    )
}

// SubPage.propTypes = {
//     data: PropTypes.shape({
//         markdownRemark: PropTypes.object,
//     }),
// }

export default SubPage

export const subPageQuery = graphql`
    query SubPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                coverImage
            }
        }
    }
`