import asyncio
import logging

import cognee


async def main():
    text = "Natural language processing (NLP) is a subfield of computer science."
    await cognee.add(text)
    results = await cognee.cognify()
    for result in results:
        logging.info(result)
        logging.info(result)


if __name__ == "__main__":
    asyncio.run(main())
