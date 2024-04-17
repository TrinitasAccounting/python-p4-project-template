"""removed the years coached column

Revision ID: eb4220aeefeb
Revises: a9ecbb954437
Create Date: 2024-04-17 12:36:03.766869

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'eb4220aeefeb'
down_revision = 'a9ecbb954437'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('coaches', schema=None) as batch_op:
        batch_op.drop_column('years_coached')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('coaches', schema=None) as batch_op:
        batch_op.add_column(sa.Column('years_coached', sa.INTEGER(), nullable=True))

    # ### end Alembic commands ###