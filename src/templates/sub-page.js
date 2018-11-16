import React from 'react'
// import PropTypes from 'prop-types'
// import PageHeader from

export const SubPageTemplate = ({
    title,
    coverImage,
    copy
}) => (
        <main>
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
    const { queryData } = data.markdownRemark

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