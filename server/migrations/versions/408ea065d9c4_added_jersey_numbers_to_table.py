"""Added jersey_numbers to table

Revision ID: 408ea065d9c4
Revises: 
Create Date: 2024-04-13 10:59:21.174304

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '408ea065d9c4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('players',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('jersey_number', sa.Integer(), nullable=True),
    sa.Column('points', sa.Integer(), nullable=True),
    sa.Column('assits', sa.Integer(), nullable=True),
    sa.Column('rebounds', sa.Integer(), nullable=True),
    sa.Column('games_played', sa.Integer(), nullable=True),
    sa.Column('fg_3p', sa.Integer(), nullable=True),
    sa.Column('percentage_2p', sa.Integer(), nullable=True),
    sa.Column('percentage_3p', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('players')
    # ### end Alembic commands ###