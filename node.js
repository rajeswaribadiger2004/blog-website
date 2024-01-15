document.addEventListener('DOMContentLoaded', function() {
    const readMoreTexts = document.querySelectorAll('.read-more');
    const readLessTexts = document.querySelectorAll('.read-less');
    const initialContents = document.querySelectorAll('.initial-content');
    const remainingContents = document.querySelectorAll('.remaining-content');

    // Initially hide "Read Less" texts
    readLessTexts.forEach(textLink => {
        textLink.style.display = 'none';
    });

    // Event listener for "Read More" text links
    readMoreTexts.forEach(textLink => {
        textLink.addEventListener('click', function() {
            const article = this.closest('article');
            const initialContent = article.querySelector('.initial-content');
            const remainingContent = article.querySelector('.remaining-content');

            remainingContent.style.display = 'block';
            initialContent.style.display = 'block';
            textLink.style.display = 'none';

            // Show "Read Less" text link
            const readLessText = article.querySelector('.read-less');
            readLessText.style.display = 'inline';
        });
    });

    // Event listener for "Read Less" text links
    readLessTexts.forEach(textLink => {
        textLink.addEventListener('click', function() {
            const article = this.closest('article');
            const initialContent = article.querySelector('.initial-content');
            const remainingContent = article.querySelector('.remaining-content');

            remainingContent.style.display = 'none';
            initialContent.style.display = 'block';
            textLink.style.display = 'none';

            // Show "Read More" text link
            const readMoreText = article.querySelector('.read-more');
            readMoreText.style.display = 'inline';
        });
    });
});