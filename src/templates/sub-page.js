import React from 'react'
import PropTypes from 'prop-types'
// import PageHeader from

export const SubPageTemplate = ({
    title,
    coverImage,
    sections
}) => (
        <PageHeader title={"title"} coverImage={"coverImage"}/>
        <main>
            <section class="letter">
                <div class="copy">
                    {
                        sections.map( section => (
                                <h1>section.header</h1>
                                <div>section.markdownRemark.html</div>
                            )
                        )
                    }
                </div>
            </section>
        </main>
    )

SubPageTemplate.propTypes = {
    title: PropTypes.string,
    coverImage: PropTypes.string,
    sections: PropTypes.array
}

const SubPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <SubPageTemplate
            title={frontmatter.title}
            coverImage={frontmatter.coverImage}
            sections={frontmatter.sections}
        />
    )
}

SubPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default SubPage

export const subPageQuery = graphql`
  query SubPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        coverImage
        title
        sections {
            header,
            markdownRemark {
                html
            }
        }
      }
    }
  }
`